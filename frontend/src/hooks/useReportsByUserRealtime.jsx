import { useState, useEffect, useCallback } from 'react'
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  onSnapshot,
} from 'firebase/firestore'
import { db } from '../firebase/config'

const PAGE_SIZE = 5

export function useReportsByUserRealtime(userId) {
  const [reports, setReports] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [lastDoc, setLastDoc] = useState(null)
  const [hasMore, setHasMore] = useState(true)

  // função para carregar próximo lote
  const loadMore = useCallback(() => {
    if (!userId || !hasMore) return

    setLoading(true)
    setError(null)

    let q = query(
      collection(db, 'denuncia'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc'),
      limit(PAGE_SIZE)
    )

    if (lastDoc) {
      q = query(
        collection(db, 'denuncia'),
        where('userId', '==', userId),
        orderBy('createdAt', 'desc'),
        startAfter(lastDoc),
        limit(PAGE_SIZE)
      )
    }

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        if (!snapshot.empty) {
          const newReports = snapshot.docs.map(doc => ({
            reportId: doc.id,
            ...doc.data(),
          }))

          setReports(prev => [...prev, ...newReports])
          setLastDoc(snapshot.docs[snapshot.docs.length - 1])
          setHasMore(snapshot.docs.length === PAGE_SIZE)
        } else {
          setHasMore(false)
        }
        setLoading(false)
      },
      (err) => {
        setError(err)
        setLoading(false)
      }
    )

    return unsubscribe
  }, [userId, lastDoc, hasMore])

  // resetar estado ao trocar usuário
  useEffect(() => {
    setReports([])
    setLastDoc(null)
    setHasMore(true)

    if (!userId) {
      setReports([])
      return
    }

    setLoading(true)
    setError(null)

    const q = query(
      collection(db, 'denuncia'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc'),
      limit(PAGE_SIZE)
    )

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        if (!snapshot.empty) {
          const initialReports = snapshot.docs.map(doc => ({
            reportId: doc.id,
            ...doc.data(),
          }))

          setReports(initialReports)
          setLastDoc(snapshot.docs[snapshot.docs.length - 1])
          setHasMore(snapshot.docs.length === PAGE_SIZE)
        } else {
          setReports([])
          setHasMore(false)
        }
        setLoading(false)
      },
      (err) => {
        setError(err)
        setLoading(false)
      }
    )

    return () => {
      unsubscribe()
    }
  }, [userId])

  return { reports, loading, error, loadMore, hasMore }
}