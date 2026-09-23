import Reveal from './Reveal';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <Reveal as="div" className="about-media">
          <img src="/assets/photos/about.jpg" alt="Панорамный отель «Небо»" className="about-photo" />
        </Reveal>
        <Reveal as="div" className="about-text">
          <span className="eyebrow">О нас</span>
          <h2 className="section-title">
            Тихое место
            <br />
            над озером
          </h2>
          <p>
            Панорамный отель «Небо» — камерное пространство на 17 номеров у озера Ак-Гёль и городского парка в
            Махачкале. Стильный интерьер, продуманный сервис и вид, который меняется вместе со временем суток.
          </p>
          <p>
            Семейный ресторан «Павлония», авторские завтраки и внимание к деталям — то, что делает пребывание здесь
            спокойным и запоминающимся.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
