'use client';

import Layout from '../components/Layout';
import { useState } from 'react';
import Link from 'next/link';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика входа
    console.log('Login attempt:', { email, password });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8 text-center">Вход в систему</h1>
          
          <div className="card p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-2">
                  Пароль
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-white"
                  required
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 text-red-600 focus:ring-red-600 border-gray-700 rounded bg-gray-800"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-400">
                    Запомнить меня
                  </label>
                </div>
                
                <Link href="/forgot-password" className="text-sm text-red-600 hover:text-red-500">
                  Забыли пароль?
                </Link>
              </div>
              
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
              >
                Войти
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Нет аккаунта?{' '}
                <Link href="/register" className="text-red-600 hover:text-red-500">
                  Зарегистрироваться
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage; 