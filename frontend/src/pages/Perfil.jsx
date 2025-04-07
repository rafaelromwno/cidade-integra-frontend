import React from 'react';
import { UserInfoCard } from '../components/Perfil/UserInfoCard';
import { UserStatsCard } from '../components/Perfil/UserStatsCard';
import { UserActivityCard } from '../components/Perfil/UserActivityCard'; // Novo componente para mostrar atividades
import Layout from '../components/layout/Layout';
import { useAuth } from '../context/AuthContext';

const Perfil = () => {
  const { currentUser } = useAuth();

  // Simulação de dados adicionais
  const mockStats = {
    level: 3,
    medals: 5,
    points: 340,
    city: 'Matão - SP',
  };

  // Simulação de atividades recentes do usuário
  const userActivities = [
    { id: 1, title: 'Denúncia de lixo na rua', status: 'resolvida', date: '2025-04-01' },
    { id: 2, title: 'Problema de iluminação pública', status: 'pendente', date: '2025-03-28' },
    { id: 3, title: 'Falta de transporte público', status: 'resolvida', date: '2025-03-25' },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-3xl mx-auto space-y-8 bg-white p-6 rounded-lg shadow-lg">
          {/* Card de informações pessoais do usuário */}
          <UserInfoCard
            name={currentUser?.displayName || 'Usuário'}
            email={currentUser?.email || 'email@dominio.com'}
            city={mockStats.city}
            photo={currentUser?.photoURL || ''}
          />

          {/* Card de estatísticas do usuário */}
          <UserStatsCard
            level={mockStats.level}
            medals={mockStats.medals}
            points={mockStats.points}
          />

          {/* Card de atividades recentes do usuário */}
          <UserActivityCard activities={userActivities} />

          {/* Botão para editar perfil ou visualizar mais detalhes */}
          <div className="text-center mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Editar Perfil
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Perfil;
