'use client';

import Layout from '../components/Layout';
import Link from 'next/link';

interface Team {
  id: string;
  name: string;
  founded: string;
  coach: string;
  position: number;
  points: number;
}

const TeamsPage = () => {
  const teams: Team[] = [
    {
      id: 'rmfc-2',
      name: 'RMFC - 2',
      founded: '2023',
      coach: 'Иван Иванов',
      position: 1,
      points: 0
    },
    {
      id: 'bfc-belye',
      name: 'BFC - Белые',
      founded: '2023',
      coach: 'Петр Петров',
      position: 2,
      points: 0
    },
    {
      id: 'karfc',
      name: 'KarFC',
      founded: '2023',
      coach: 'Алексей Алексеев',
      position: 3,
      points: 0
    },
    {
      id: 'rmfc-binakensk',
      name: 'RMFC- Binakensk',
      founded: '2023',
      coach: 'Сергей Сергеев',
      position: 4,
      points: 0
    },
    {
      id: 'rangersscauts',
      name: 'RangersScauts',
      founded: '2023',
      coach: 'Николай Николаев',
      position: 5,
      points: 0
    },
    {
      id: 'astanada-2',
      name: 'Astanada - 2',
      founded: '2023',
      coach: 'Андрей Андреев',
      position: 6,
      points: 0
    },
    {
      id: 'manchester-scauts',
      name: 'Manchester Scauts',
      founded: '2023',
      coach: 'Дмитрий Дмитриев',
      position: 7,
      points: 0
    },
    {
      id: 'almalyk-united',
      name: 'Almalyk United',
      founded: '2023',
      coach: 'Максим Максимов',
      position: 8,
      points: 0
    },
    {
      id: 'datrafc',
      name: 'DatraFC',
      founded: '2023',
      coach: 'Александр Александров',
      position: 9,
      points: 0
    },
    {
      id: 'sdushor-cf',
      name: 'SDUSHOR C.F',
      founded: '2023',
      coach: 'Владимир Владимиров',
      position: 10,
      points: 0
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Команды</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team) => (
            <Link 
              key={team.id} 
              href={`/teams/${team.id}`}
              className="card p-6 hover:bg-gray-800/50 transition-colors"
            >
              <h2 className="text-xl font-bold text-white mb-4">{team.name}</h2>
              <div className="space-y-2">
                <p className="text-gray-400">Год основания: <span className="text-white">{team.founded}</span></p>
                <p className="text-gray-400">Главный тренер: <span className="text-white">{team.coach}</span></p>
                <p className="text-gray-400">Позиция в таблице: <span className="text-white">{team.position}</span></p>
                <p className="text-gray-400">Очки: <span className="text-white">{team.points}</span></p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TeamsPage; 