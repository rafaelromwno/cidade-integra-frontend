import React from 'react';
import { useAuth } from '../../context/AuthContext';

export const UserInfoCard = ({ name, email, city, photo }) => {
  const { currentUser } = useAuth();
  const firstLetter =
    currentUser?.displayName?.charAt(0).toUpperCase() ||
    currentUser?.email?.charAt(0).toUpperCase() ||
    "U";

  return (
    <div className="bg-gray-100 shadow-lg rounded-2xl p-6 flex items-center gap-4">
      {photo ? (
        <img
          src={photo}
          alt="Foto de perfil"
          className="w-20 h-20 rounded-full object-cover border-4 border-verde-paleta"
        />
      ) : (
        <div className="w-20 h-20 rounded-full flex items-center justify-center bg-verde-paleta text-white text-3xl font-bold border-4 border-verde-paleta">
          {firstLetter}
        </div>
      )}
      <div>
        <h2 className="text-2xl font-semibold text-azul-paleta">{name}</h2>
        <p className="text-base text-gray-600">{email}</p>
        <p className="text-sm text-gray-600">{city}</p>
      </div>
    </div>
  );
};