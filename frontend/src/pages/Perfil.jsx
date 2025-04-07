import React from 'react';
import { UserInfoCard } from '../components/Perfil/UserInfoCard';
import { UserStatsCard } from '../components/Perfil/UserStatsCard';
import Layout from '../components/layout/Layout';
import { useAuth } from '../context/AuthContext';

const Perfil = () => {
  const { currentUser } = useAuth();

  // simulação de dados adicionais
  const mockStats = {
    level: 3, 
    medals: 5,
    points: 340,
    city: 'Matão - SP',
  };

  return (
    <Layout>
      <div className="min-h-screen p-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <UserInfoCard
            name={currentUser?.displayName || 'Usuário'}
            email={currentUser?.email || 'email@dominio.com'}
            city={mockStats.city}
            photo={currentUser?.photoURL || ''}
          />
  
          <UserStatsCard
            level={mockStats.level}
            medals={mockStats.medals}
            points={mockStats.points}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Perfil;