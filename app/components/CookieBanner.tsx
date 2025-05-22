'use client';

import { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[var(--color-surface)] border-t border-[var(--color-primary)]/20 p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[var(--color-text-secondary)] text-sm">
          Мы используем файлы cookie для улучшения вашего опыта на нашем сайте.
        </p>
        <button
          onClick={acceptCookies}
          className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-6 py-2 rounded-lg transition-colors duration-200"
        >
          Принять
        </button>
      </div>
    </div>
  );
};

export default CookieBanner; 