'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">FLS</h3>
            <p className="text-gray-400">
              Футбольная Лига Студентов - соревнование для студенческих команд
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/matches" className="text-gray-400 hover:text-white transition-colors">
                  Матчи
                </Link>
              </li>
              <li>
                <Link href="/teams" className="text-gray-400 hover:text-white transition-colors">
                  Команды
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-white transition-colors">
                  Новости
                </Link>
              </li>
              <li>
                <Link href="/rules" className="text-gray-400 hover:text-white transition-colors">
                  Правила
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 FLS. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 