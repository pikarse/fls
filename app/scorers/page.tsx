'use client';

import Layout from '../components/Layout';

const ScorersPage = () => {
  const lastSeasonScorers = [
    {
      position: 1,
      name: "Баянов Гаплан",
      team: "BFC",
      goals: 26,
      assists: 4
    },
    {
      position: 2,
      name: "Пилипак Тимур",
      team: "BFC",
      goals: 25,
      assists: 4
    },
    {
      position: 3,
      name: "Омаров Мейрам",
      team: "RMFC",
      goals: 24,
      assists: 6
    },
    {
      position: 4,
      name: "Омаров Мирас",
      team: "BFC",
      goals: 21,
      assists: 1
    },
    {
      position: 5,
      name: "Баянов Адлан",
      team: "RMFC",
      goals: 21,
      assists: 7
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 animate-fadeIn">Бомбардиры</h1>
        
        <div className="mb-12 animate-fadeInUp">
          <h2 className="text-2xl font-bold mb-4">Текущий сезон</h2>
          <div className="bg-gray-800 rounded-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <div className="p-8 text-center">
              <p className="text-gray-400 text-lg">Пока ничего нет</p>
              <p className="text-gray-500 mt-2">Статистика будет доступна после начала сезона</p>
            </div>
          </div>
        </div>

        <div className="animate-fadeInUp" style={{ animationDelay: '200ms' }}>
          <h2 className="text-2xl font-bold mb-4">Прошлый сезон</h2>
          <div className="bg-gray-800 rounded-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-700">
                  <th className="px-6 py-3 text-left">Поз</th>
                  <th className="px-6 py-3 text-left">Игрок</th>
                  <th className="px-6 py-3 text-left">Команда</th>
                  <th className="px-6 py-3 text-center">Голы</th>
                  <th className="px-6 py-3 text-center">Передачи</th>
                </tr>
              </thead>
              <tbody>
                {lastSeasonScorers.map((scorer, index) => (
                  <tr 
                    key={scorer.position} 
                    className="border-t border-gray-700 hover:bg-gray-700/50 transition-colors duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <td className="px-6 py-4">{scorer.position}</td>
                    <td className="px-6 py-4 font-medium">{scorer.name}</td>
                    <td className="px-6 py-4">{scorer.team}</td>
                    <td className="px-6 py-4 text-center text-red-500 font-bold">{scorer.goals}</td>
                    <td className="px-6 py-4 text-center">{scorer.assists}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ScorersPage; 