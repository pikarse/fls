'use client';

import LeagueTable from './components/LeagueTable';
import Layout from './components/Layout';
import { FaTrophy, FaCalendarAlt, FaNewspaper } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 flex items-center space-x-3">
          <FaTrophy className="text-red-600" />
          <span>FLS - Футбольная Лига Студентов</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link href="/matches" className="card group hover:border-red-600/50">
            <div className="flex items-center space-x-3 mb-4">
              <FaCalendarAlt className="text-red-600 text-2xl" />
              <h2 className="text-xl font-semibold text-white">Ближайшие матчи</h2>
            </div>
            <p className="text-gray-400">Смотрите расписание предстоящих матчей и не пропустите важные игры!</p>
          </Link>

          <Link href="/news" className="card group hover:border-red-600/50">
            <div className="flex items-center space-x-3 mb-4">
              <FaNewspaper className="text-red-600 text-2xl" />
              <h2 className="text-xl font-semibold text-white">Последние новости</h2>
            </div>
            <p className="text-gray-400">Будьте в курсе всех событий лиги и следите за обновлениями!</p>
          </Link>

          <Link href="/rules" className="card group hover:border-red-600/50">
            <div className="flex items-center space-x-3 mb-4">
              <FaTrophy className="text-red-600 text-2xl" />
              <h2 className="text-xl font-semibold text-white">Правила лиги</h2>
            </div>
            <p className="text-gray-400">Ознакомьтесь с правилами проведения турнира и регламентом лиги.</p>
          </Link>
        </div>

        <div className="card">
          <h2 className="text-2xl font-semibold mb-6 text-white">Турнирная таблица</h2>
          <LeagueTable />
        </div>
      </div>
    </Layout>
  );
} 