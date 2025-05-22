'use client';

import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';

const NewsPage = () => {
  const news = [
    {
      id: 1,
      title: "Старт сезона FLS 2024",
      date: "15 марта 2024",
      image: "/news/season-start.jpg",
      excerpt: "Новый сезон FLS начинается с захватывающих матчей и новых надежд для всех команд.",
      category: "Новости лиги"
    },
    {
      id: 2,
      title: "Интервью с главным тренером RMFC-2",
      date: "14 марта 2024",
      image: "/news/coach-interview.jpg",
      excerpt: "Иван Петров делится своими ожиданиями от нового сезона и планами на будущее.",
      category: "Интервью"
    },
    {
      id: 3,
      title: "Новые правила FLS",
      date: "13 марта 2024",
      image: "/news/rules.jpg",
      excerpt: "Ознакомьтесь с обновленными правилами лиги на сезон 2024.",
      category: "Правила"
    },
    {
      id: 4,
      title: "Трансферные новости",
      date: "12 марта 2024",
      image: "/news/transfers.jpg",
      excerpt: "Последние трансферные новости и изменения в составах команд.",
      category: "Трансферы"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Новости</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {news.map((item) => (
            <Link href={`/news/${item.id}`} key={item.id}>
              <div className="card hover:scale-105 transition-transform duration-300">
                <div className="relative h-48 mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </div>
                </div>
                
                <div className="p-4">
                  <h2 className="text-xl font-bold text-white mb-2">{item.title}</h2>
                  <p className="text-gray-400 mb-4">{item.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">{item.date}</span>
                    <span className="text-red-600 hover:text-red-500">Читать далее →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default NewsPage; 