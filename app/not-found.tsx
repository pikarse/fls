import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="error-page">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-fls-red mb-4">Ошибка 404</h1>
        <h2 className="text-2xl font-semibold text-white mb-8">Страница не найдена</h2>
        <p className="text-gray-400 mb-8">
          Извините, запрашиваемая страница не существует.
        </p>
        <Link href="/" className="btn-primary">
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
} 