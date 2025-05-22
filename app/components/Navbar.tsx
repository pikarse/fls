'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg animate-fadeIn">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold hover:scale-105 transition-transform duration-300">
            FLS - Футбольная Лига Студентов
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/matches" className="hover:text-red-600 transition-all duration-300 hover:scale-110 transform">
              Матчи
            </Link>
            <Link href="/teams" className="hover:text-red-600 transition-all duration-300 hover:scale-110 transform">
              Команды
            </Link>
            <Link href="/news" className="hover:text-red-600 transition-all duration-300 hover:scale-110 transform">
              Новости
            </Link>
            <Link href="/scorers" className="hover:text-red-600 transition-all duration-300 hover:scale-110 transform">
              Бомбардиры
            </Link>
            <Link href="/puskas" className="hover:text-red-600 transition-all duration-300 hover:scale-110 transform">
              Премия Пушкаша
            </Link>
            <Link href="/rules" className="hover:text-red-600 transition-all duration-300 hover:scale-110 transform">
              Правила
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden hover:scale-110 transition-transform duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-slideDown">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/matches" 
                className="hover:text-red-600 transition-all duration-300 hover:translate-x-2 transform"
                onClick={() => setIsMenuOpen(false)}
              >
                Матчи
              </Link>
              <Link 
                href="/teams" 
                className="hover:text-red-600 transition-all duration-300 hover:translate-x-2 transform"
                onClick={() => setIsMenuOpen(false)}
              >
                Команды
              </Link>
              <Link 
                href="/news" 
                className="hover:text-red-600 transition-all duration-300 hover:translate-x-2 transform"
                onClick={() => setIsMenuOpen(false)}
              >
                Новости
              </Link>
              <Link 
                href="/scorers" 
                className="hover:text-red-600 transition-all duration-300 hover:translate-x-2 transform"
                onClick={() => setIsMenuOpen(false)}
              >
                Бомбардиры
              </Link>
              <Link 
                href="/puskas" 
                className="hover:text-red-600 transition-all duration-300 hover:translate-x-2 transform"
                onClick={() => setIsMenuOpen(false)}
              >
                Премия Пушкаша
              </Link>
              <Link 
                href="/rules" 
                className="hover:text-red-600 transition-all duration-300 hover:translate-x-2 transform"
                onClick={() => setIsMenuOpen(false)}
              >
                Правила
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 