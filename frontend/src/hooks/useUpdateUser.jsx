import { useState } from "react"
import { doc, updateDoc } from "firebase/firestore"
import { db } from "../firebase/config"

export function useUpdateUser() {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function updateUser(userId, updates) {

    setLoading(true)
    setError(null)

    try {

      const userRef = doc(db, "users", userId)
      await updateDoc(userRef, updates)
      
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  return { updateUser, loading, error }
}