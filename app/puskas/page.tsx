'use client';

import Layout from '../components/Layout';

interface Nominee {
  id: number;
  name: string;
  team: string;
  goalType: string;
  description: string;
  isWinner: boolean;
}

const PuskasPage = () => {
  const nominees: Nominee[] = [
    {
      id: 1,
      name: "Омаров Мейрам",
      team: "RMFC",
      goalType: "Гол головой",
      description: "Потрясающий гол головой в ворота соперника и в свои",
      isWinner: true
    },
    {
      id: 2,
      name: "Пилипак Тимур",
      team: "BFC",
      goalType: "Гол с выхода",
      description: "Красивый гол с выхода из-за пределов штрафной",
      isWinner: false
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Номинанты на Премию Пушкаша</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {nominees.map((nominee) => (
            <div key={nominee.id} className={`card p-6 ${nominee.isWinner ? 'border-2 border-red-600' : ''}`}>
              <div className="mb-4">
                <h2 className="text-xl font-bold text-white mb-2">{nominee.name}</h2>
                <p className="text-gray-400 mb-1">Команда: {nominee.team}</p>
                <p className="text-red-600 font-semibold mb-2">{nominee.goalType}</p>
                <p className="text-gray-300">{nominee.description}</p>
                {nominee.isWinner && (
                  <div className="mt-4 text-center">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Победитель Премии Пушкаша
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PuskasPage; 