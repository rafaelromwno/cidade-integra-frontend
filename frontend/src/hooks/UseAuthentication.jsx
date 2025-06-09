import { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { auth, googleProvider, db } from "@/firebase/config";
import { formatISO } from "date-fns";
import { updateProfile } from "firebase/auth";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userRef = doc(db, "users", currentUser.uid);
        await updateDoc(userRef, {
          lastLoginAt: formatISO(new Date()),
        }).catch(() => {
          setDoc(userRef, {
            displayName: currentUser.displayName || "",
            email: currentUser.email,
            photoURL: currentUser.photoURL || "",
            role: "user",
            createdAt: formatISO(new Date()),
            score: 0,
            reportCount: 0,
            lastLoginAt: formatISO(new Date()),
            region: "",
            verified: false,
            bio: "",
            status: "active",
          });
        });

        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const loginWithEmail = async (email, password) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return { success: true };
    } catch (err) {
      const message = mapAuthError(err);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  const registerWithEmail = async (email, password, displayName = "") => {
    setLoading(true);
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      const user = cred.user;

      // Atualize o displayName no Auth
      if (displayName) {
        await updateProfile(user, { displayName });
      }

      const userDoc = {
        displayName: displayName || user.displayName || "",
        email: user.email,
        photoURL: user.photoURL || "",
        role: "user",
        createdAt: formatISO(new Date()),
        score: 0,
        reportCount: 0,
        lastLoginAt: formatISO(new Date()),
        region: "",
        verified: false,
        bio: "",
        status: "active",
      };

      await setDoc(doc(db, "users", user.uid), userDoc);

      return { success: true };
    } catch (err) {
      const message = mapAuthError(err);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
      if (!userSnap.exists()) {
        await setDoc(userRef, {
          displayName: user.displayName || "",
          email: user.email,
          photoURL: user.photoURL || "",
          role: "user",
          createdAt: formatISO(new Date()),
          score: 0,
          reportCount: 0,
          lastLoginAt: formatISO(new Date()),
          region: "",
          verified: false,
          bio: "",
          status: "active",
        });
      } else {
        await updateDoc(userRef, {
          lastLoginAt: formatISO(new Date()),
        });
      }

      return { success: true };
    } catch (err) {
      const message = mapAuthError(err);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      return { success: true };
    } catch (err) {
      const message = mapAuthError(err);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email) => {
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      return { success: true };
    } catch (err) {
      const message = mapAuthError(err);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    loginWithEmail,
    registerWithEmail,
    loginWithGoogle,
    logout,
    resetPassword,
  };
}

function mapAuthError(error) {
  const code = error.code;
  const messages = {
    "auth/user-not-found": "Usuário não encontrado.",
    "auth/invalid-credential":
      "Credenciais inválidas. Verifique e tente novamente.",
    "auth/email-already-in-use": "Este e-mail já está em uso.",
    "auth/invalid-email": "E-mail inválido.",
    "auth/weak-password": "A senha deve ter pelo menos 6 caracteres.",
    "auth/popup-closed-by-user": "Login cancelado pelo usuário.",
    "auth/popup-blocked":
      "O navegador bloqueou a janela de login. Permita pop-ups e tente novamente.",
    "auth/cancelled-popup-request":
      "A solicitação de login foi cancelada. Tente novamente.",
    "auth/account-exists-with-different-credential":
      "Já existe uma conta com este e-mail usando outro método de login.",
    "auth/operation-not-allowed":
      "O método de login está desativado. Contate o suporte.",
    "auth/network-request-failed":
      "Erro de conexão. Verifique sua internet e tente novamente.",
    "auth/too-many-requests": "Muitas tentativas. Tente novamente mais tarde.",
  };

  return messages[code] || `Erro desconhecido (${code}). Tente novamente.`;
}
