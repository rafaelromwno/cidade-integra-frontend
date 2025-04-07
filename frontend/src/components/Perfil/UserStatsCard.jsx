import React from 'react';
import { Medal, Star } from 'lucide-react';

export const UserStatsCard = ({ level, medals, points }) => {
  return (
    <div className="bg-gray-100 shadow-lg rounded-2xl p-6">
      <h3 className="text-xl font-bold text-azul-paleta mb-4">Contribuições</h3>
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center">
          <Star className="text-verde-escuro-paleta w-8 h-8" />
          <span className="mt-2 text-sm text-gray-600">Nível</span>
          <span className="font-semibold text-lg text-azul-paleta">{level}</span>
        </div>
        <div className="flex flex-col items-center">
          <Medal className="text-verde-escuro-paleta w-8 h-8" />
          <span className="mt-2 text-sm text-gray-600">Medalhas</span>
          <span className="font-semibold text-lg text-azul-paleta">{medals}</span>
        </div>
        <div className="flex flex-col items-center">
          <Star className="text-verde-escuro-paleta w-8 h-8" />
          <span className="mt-2 text-sm text-gray-600">Pontos</span>
          <span className="font-semibold text-lg text-azul-paleta">{points}</span>
        </div>
      </div>
    </div>
  );
};