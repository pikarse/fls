'use client';

import Layout from '../../components/Layout';

interface TeamPageProps {
  params: {
    team: string;
  };
}

const TeamPage = ({ params }: TeamPageProps) => {
  const teamInfo = {
    'rmfc-2': {
      name: 'RMFC - 2',
      founded: '2023',
      coach: 'Иван Иванов',
      stadium: 'RMFC Academy',
      achievements: ['Победа в лиге B 2023'],
      players: []
    },
    'bfc-belye': {
      name: 'BFC - Белые',
      founded: '2023',
      coach: 'Петр Петров',
      stadium: 'Camp BFC Stadium',
      achievements: ['Победа в лиге B 2023'],
      players: [
        { name: 'Иван Смирнов', position: 'Нападающий' },
        { name: 'Андрей Новиков', position: 'Полузащитник' },
        { name: 'Максим Иванов', position: 'Защитник' }
      ]
    },
    'karfc': {
      name: 'KarFC',
      founded: '2023',
      coach: 'Алексей Алексеев',
      stadium: 'Стадион KarFC',
      achievements: ['Победа в лиге B 2023'],
      players: [
        { name: 'Дмитрий Иванов', position: 'Нападающий' },
        { name: 'Николай Смирнов', position: 'Полузащитник' },
        { name: 'Александр Козлов', position: 'Защитник' }
      ]
    }
  };

  const team = teamInfo[params.team as keyof typeof teamInfo];

  if (!team) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-white mb-8">Команда не найдена</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">{team.name}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card p-6">
            <h2 className="text-xl font-bold text-white mb-4">Информация о команде</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400">Год основания</p>
                <p className="text-white">{team.founded}</p>
              </div>
              <div>
                <p className="text-gray-400">Главный тренер</p>
                <p className="text-white">{team.coach}</p>
              </div>
              <div>
                <p className="text-gray-400">Стадион</p>
                <p className="text-white">{team.stadium}</p>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-xl font-bold text-white mb-4">Достижения</h2>
            <ul className="list-disc list-inside space-y-2">
              {team.achievements.map((achievement, index) => (
                <li key={index} className="text-gray-300">{achievement}</li>
              ))}
            </ul>
          </div>

          {team.players.length > 0 && (
            <div className="card p-6 md:col-span-2">
              <h2 className="text-xl font-bold text-white mb-4">Состав команды</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {team.players.map((player, index) => (
                  <div key={index} className="p-4 bg-gray-800 rounded-lg">
                    <p className="text-white font-medium">{player.name}</p>
                    <p className="text-gray-400">{player.position}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default TeamPage; 