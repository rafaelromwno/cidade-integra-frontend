import {
  collection,
  query,
  orderBy,
  limit,
  getDoc,
  getDocs,
  startAfter,
  doc,
  updateDoc,
  deleteDoc,
  Timestamp,
  addDoc,
  increment,
  where,
} from "firebase/firestore"
import { db } from "../firebase/config"
import { useState } from "react"

const REPORT_COLLECTION = "reports"

export function useReport() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const reportsRef = collection(db, REPORT_COLLECTION)

  // criar denúncia
  const createReport = async (report) => {
    setLoading(true)
    setError(null)

    try {
      const now = Timestamp.now()

      const docRef = await addDoc(reportsRef, {
        ...report,
        createdAt: now,
        updatedAt: now,
        status: "pending",
        resolvedAt: null,
      })

      // incrementa o contador de denúncias, mesmo se for anônima (desde que tenha userId)
      if (report.userId) {
        const userRef = doc(db, "users", report.userId)
        await updateDoc(userRef, {
          reportCount: increment(1),
        })
      }

      return docRef.id
    } catch (err) {
      setError(err)
      console.error("Erro ao criar denúncia:", err)
      throw err
    } finally {
      setLoading(false)
    }
  }

  // buscar denúncia por ID
  const getReportById = async (id) => {
    setLoading(true)
    setError(null)

    try {
      const docSnap = await getDoc(doc(db, REPORT_COLLECTION, id))
      if (docSnap.exists()) {
        return { reportId: docSnap.id, ...docSnap.data() }
      }
      return null
    } catch (err) {
      setError(err)
      return null
    } finally {
      setLoading(false)
    }
  }

  // buscar todas as denúncias
  const getAllReports = async (userId) => {
    setLoading(true)
    setError(null)

    try {
      let q = query(reportsRef, orderBy("createdAt", "desc"))
      if (userId) {
        q = query(
          reportsRef,
          where("userId", "==", userId),
          orderBy("createdAt", "desc")
        )
      }

      const querySnapshot = await getDocs(q)
      return querySnapshot.docs.map((doc) => ({
        reportId: doc.id,
        ...doc.data(),
      }))
    } catch (err) {
      setError(err)
      return []
    } finally {
      setLoading(false)
    }
  }

  // buscar as primeiras denúncias
  const getInitialReports = async (limitCount) => {
    try {
      const q = query(
        collection(db, REPORT_COLLECTION),
        orderBy("createdAt", "desc"),
        limit(limitCount)
      )
      const snapshot = await getDocs(q)

      const reports = snapshot.docs.map((doc) => ({
        reportId: doc.id,
        ...doc.data(),
      }))

      const lastVisible = snapshot.docs[snapshot.docs.length - 1] ?? null

      return { reports, lastVisible }
    } catch (err) {
      throw err
    }
  }

  // buscar mais denúncias
  const getMoreReports = async (lastDoc, limitCount) => {
    try {
      const q = query(
        collection(db, REPORT_COLLECTION),
        orderBy("createdAt", "desc"),
        startAfter(lastDoc),
        limit(limitCount)
      )
      const snapshot = await getDocs(q)

      const reports = snapshot.docs.map((doc) => ({
        reportId: doc.id,
        ...doc.data(),
      }))

      const newLastVisible = snapshot.docs[snapshot.docs.length - 1] ?? null

      return { reports, lastVisible: newLastVisible }
    } catch (err) {
      throw err
    }
  }

  // atualizar denúncia
  const updateReport = async (id, updates) => {
    setLoading(true)
    setError(null)

    try {
      await updateDoc(doc(db, REPORT_COLLECTION, id), {
        ...updates,
        updatedAt: Timestamp.now(),
      })
      return true
    } catch (err) {
      setError(err)
      return false
    } finally {
      setLoading(false)
    }
  }

  // deletar denúncia
  const deleteReport = async (id) => {
    setLoading(true)
    setError(null)

    try {
      await deleteDoc(doc(db, REPORT_COLLECTION, id))
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  // atualizar status da denúncia
  const updateStatus = async (reportId, status) => {
    setLoading(true)
    setError(null)

    try {
      const update = {
        status,
        updatedAt: Timestamp.now(),
      }
      if (status === "resolved") {
        update.resolvedAt = Timestamp.now()
      }
      await updateDoc(doc(db, REPORT_COLLECTION, reportId), update)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  // marcar denúncia como resolvida
  const markAsResolved = (id) => updateStatus(id, "resolved")

  // marcar denúncia como arquivada
  const markAsArchived = (id) => updateStatus(id, "archived")

  return {
    loading,
    error,
    createReport,
    getReportById,
    getAllReports,
    updateReport,
    deleteReport,
    markAsResolved,
    markAsArchived,
    getInitialReports,
    getMoreReports,
  }
}