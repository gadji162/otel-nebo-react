export default function Footer() {
  return (
    <footer className="site-footer" id="contacts">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="logo-text logo-text--footer">НЕБО</span>
          <span className="footer-tagline">Отель · Парк · Озеро</span>
        </div>
        <div className="footer-info">
          <p>Петра Первого, 94, Махачкала, Республика Дагестан</p>
          <p>
            <a href="tel:+79882912222">+7 988 291 2222</a> ·{' '}
            <a href="mailto:nebo05@yandex.ru">nebo05@yandex.ru</a> ·{' '}
            <a href="https://t.me/hotel05" target="_blank" rel="noopener noreferrer">
              Telegram: @hotel05
            </a>
          </p>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Отель «Небо». Все права защищены.</p>
      </div>
    </footer>
  );
}
