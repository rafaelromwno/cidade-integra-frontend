// src/hooks/useAuth.js
import { useState, useEffect } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { auth, googleProvider } from '@/firebase/config';

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const loginWithEmail = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return { success: true };
    } catch (err) {
      setError(mapAuthError(err));
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  const registerWithEmail = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      return { success: true };
    } catch (err) {
      setError(mapAuthError(err));
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    setLoading(true);
    setError(null);
    try {
      await signInWithPopup(auth, googleProvider);
      return { success: true };
    } catch (err) {
      setError(mapAuthError(err));
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    setError(null);
    try {
      await signOut(auth);
      return { success: true };
    } catch (err) {
      setError(mapAuthError(err));
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email) => {
    setLoading(true);
    setError(null);
    try {
      await sendPasswordResetEmail(auth, email);
      return { success: true };
    } catch (err) {
      setError(mapAuthError(err));
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    error,
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
    'auth/user-not-found': 'Usuário não encontrado.',
    'auth/wrong-password': 'Senha incorreta.',
    'auth/email-already-in-use': 'Este e-mail já está em uso.',
    'auth/invalid-email': 'E-mail inválido.',
    'auth/weak-password': 'A senha é muito fraca.',
    'auth/popup-closed-by-user': 'Login cancelado pelo usuário.',
  };
  return messages[code] || 'Erro desconhecido. Tente novamente.';
}