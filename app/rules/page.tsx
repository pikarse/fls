'use client';

import Layout from '../components/Layout';
import { FaUsers, FaUser, FaShieldAlt, FaCalendarAlt, FaTrophy } from 'react-icons/fa';

const RulesPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Правила FLS</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Состав команды */}
          <div className="card p-6">
            <div className="flex items-center space-x-3 mb-4">
              <FaUsers className="text-red-600 text-2xl" />
              <h2 className="text-xl font-semibold text-white">Состав команды</h2>
            </div>
            <div className="space-y-4 text-gray-400">
              <p>• Максимальное количество игроков в команде: 7 человек</p>
              <p>• Минимальное количество игроков для участия в матче: 5 человек</p>
              <p>• Один игрок может выступать за разные команды в разных матчах</p>
              <p>• При регистрации команды необходимо указать всех игроков</p>
              <p>• Замена игроков во время матча не ограничена</p>
            </div>
          </div>

          {/* Регистрация игроков */}
          <div className="card p-6">
            <div className="flex items-center space-x-3 mb-4">
              <FaUser className="text-red-600 text-2xl" />
              <h2 className="text-xl font-semibold text-white">Регистрация игроков</h2>
            </div>
            <div className="space-y-4 text-gray-400">
              <p>• Все игроки должны быть студентами</p>
              <p>• При регистрации необходимо предоставить студенческий билет</p>
              <p>• Игрок может быть зарегистрирован в нескольких командах</p>
              <p>• Перед каждым матчем необходимо подтвердить состав команды</p>
              <p>• Игроки, не зарегистрированные в системе, не допускаются к игре</p>
            </div>
          </div>

          {/* Правила игры */}
          <div className="card p-6">
            <div className="flex items-center space-x-3 mb-4">
              <FaShieldAlt className="text-red-600 text-2xl" />
              <h2 className="text-xl font-semibold text-white">Правила игры</h2>
            </div>
            <div className="space-y-4 text-gray-400">
              <p>• Продолжительность матча: 2 тайма по 20 минут</p>
              <p>• Перерыв между таймами: 5 минут</p>
              <p>• Размер поля: мини-футбольное поле</p>
              <p>• Мяч: размер 4</p>
              <p>• За победу: 3 очка, за ничью: 1 очко, за поражение: 0 очков</p>
              <p>• При равном количестве очков учитывается разница забитых и пропущенных мячей</p>
            </div>
          </div>

          {/* Расписание и формат */}
          <div className="card p-6">
            <div className="flex items-center space-x-3 mb-4">
              <FaCalendarAlt className="text-red-600 text-2xl" />
              <h2 className="text-xl font-semibold text-white">Расписание и формат</h2>
            </div>
            <div className="space-y-4 text-gray-400">
              <p>• Матчи проводятся по выходным дням</p>
              <p>• Время начала матчей: 10:00, 12:00, 14:00, 16:00</p>
              <p>• Команды должны прибыть на поле за 30 минут до начала матча</p>
              <p>• При неявке команды на матч, ей засчитывается техническое поражение</p>
              <p>• Перенос матча возможен не позднее чем за 24 часа до начала</p>
            </div>
          </div>

          {/* Награды и призы */}
          <div className="card p-6 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <FaTrophy className="text-red-600 text-2xl" />
              <h2 className="text-xl font-semibold text-white">Награды и призы</h2>
            </div>
            <div className="space-y-4 text-gray-400">
              <p>• Команда-победитель получает кубок и золотые медали</p>
              <p>• Второе место: серебряные медали</p>
              <p>• Третье место: бронзовые медали</p>
              <p>• Лучший бомбардир турнира получает специальный приз</p>
              <p>• Лучший игрок турнира получает специальный приз</p>
              <p>• Лучший вратарь турнира получает специальный приз</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400">
            По всем вопросам обращайтесь в организационный комитет FLS
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default RulesPage; 