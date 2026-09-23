import Reveal from './Reveal';

export default function Hero() {
  const handleScrollHint = () => {
    const target = document.getElementById('booking') ?? document.getElementById('about');
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      {/* ЗАМЕНИТЬ: /assets/photos/hero-poster.jpg — кадр-заглушка, который показывается до загрузки видео */}
      <video
        className="hero-media"
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/photos/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/assets/video/intro.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />

      <div className="hero-content container">
        <Reveal as="span" className="hero-tag">
          Отель · Парк · Озеро
        </Reveal>
        <Reveal as="h1" className="hero-title">
          Панорамный отель
          <br />
          «Небо»
        </Reveal>
        <Reveal as="p" className="hero-sub">
          Махачкала · вид на озеро Ак-Гёль
        </Reveal>
      </div>

      <button className="scroll-hint" id="scroll-hint" type="button" aria-label="Прокрутить вниз" onClick={handleScrollHint}>
        <span className="scroll-hint-line" />
        <span className="scroll-hint-text">Листайте</span>
      </button>
    </section>
  );
}
