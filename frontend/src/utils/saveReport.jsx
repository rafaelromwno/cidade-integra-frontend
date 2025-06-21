import { doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/firebase"; // ou "@/firebase/firebaseConfig" dependendo do seu projeto
import { serverTimestamp } from "firebase/firestore";

export const saveReportForUser = async (userId, reportId) => {
  const docRef = doc(db, "users", userId, "savedReports", reportId);
  await setDoc(docRef, {
    reportId,
    savedAt: serverTimestamp(),
  });
};

export const removeSavedReport = async (userId, reportId) => {
  const docRef = doc(db, "users", userId, "savedReports", reportId);
  await deleteDoc(docRef);
};
