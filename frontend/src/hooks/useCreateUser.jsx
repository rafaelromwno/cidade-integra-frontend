import { useState } from "react"
import { doc, setDoc } from "firebase/firestore"
import { db } from "../firebase/config"

export function useCreateUser() {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function createUser(userId, userData) {

    setLoading(true)
    setError(null)

    try {

      await setDoc(doc(db, "users", userId), {
        ...userData,
        createdAt: new Date().toISOString(),
        score: userData.score || 0,
        reportCount: userData.reportCount || 0,
        verified: userData.verified || false,
        status: userData.status || "active",
      })

    } catch (err) {

      setError(err.message)
      throw err

    } finally {
      setLoading(false)
    }
  }

  return { createUser, loading, error }
}