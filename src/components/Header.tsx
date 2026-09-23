import { useEffect, useState } from 'react';
import { useBookingModal } from '../context/BookingModalContext';
import MobileNav from './MobileNav';

const NAV_LINKS = [
  { href: '#about', label: 'Отель' },
  { href: '#rooms', label: 'Номера' },
  { href: '#restaurant', label: 'Ресторан' },
  { href: '#contacts', label: 'Контакты' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { open: openBooking } = useBookingModal();

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 40);
    updateHeader();
    window.addEventListener('scroll', updateHeader);
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  const handleLangSwitch = () => {
    // RU/EN переключатель — заглушка. Английская версия контента пока не подготовлена.
    // Когда появится перевод, заменить это на полноценный i18n.
    alert('English version coming soon / Английская версия скоро будет доступна.');
  };

  return (
    <>
      <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`} id="site-header">
        <div className="container header-inner">
          <a href="#home" className="logo" aria-label="Отель Небо — на главную">
            {/* ЗАМЕНИТЬ: положить чистый SVG/PNG логотипа в public/assets/ и заменить блок ниже на <img> */}
            <span className="logo-icon" aria-hidden="true">
              <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14 30c-4.4 0-8-3.4-8-7.6 0-4.2 3.6-7.6 8-7.6.7 0 1.4.1 2.1.3C17.4 11.2 21.8 8 27 8c6.6 0 12 5.1 12 11.4 0 .4 0 .8-.1 1.2 3.5.9 6.1 3.9 6.1 7.5 0 4.4-3.8 8-8.4 8H14z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="logo-text">НЕБО</span>
          </a>

          <nav className="main-nav" id="main-nav">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <button
              className="lang-switch"
              id="lang-switch"
              type="button"
              aria-label="Переключить язык"
              onClick={handleLangSwitch}
            >
              <span className="lang-active">RU</span>/<span className="lang-inactive">EN</span>
            </button>
            <button className="btn btn-primary btn-header" type="button" onClick={openBooking}>
              Забронировать
            </button>
            <button
              className="burger"
              id="burger"
              type="button"
              aria-label="Открыть меню"
              aria-expanded={isMobileNavOpen}
              onClick={() => setIsMobileNavOpen((v) => !v)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} links={NAV_LINKS} />
    </>
  );
}
