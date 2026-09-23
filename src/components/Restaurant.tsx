import Reveal from './Reveal';

export default function Restaurant() {
  return (
    <section className="restaurant" id="restaurant">
      <div className="container restaurant-grid">
        <Reveal as="div" className="restaurant-text">
          <span className="eyebrow">Ресторан</span>
          <h2 className="section-title">Семейный ресторан «Павлония»</h2>
          <p>
            Павлония — это место, где вкусная кухня встречается с уютной атмосферой и внимательным сервисом. Мы
            готовим с заботой о каждом госте, чтобы каждый визит оставлял только приятные впечатления.
          </p>
        </Reveal>
        <Reveal as="div" className="restaurant-media">
          <img src="/assets/photos/pavlonia.jpg" alt="Семейный ресторан «Павлония»" className="restaurant-photo" />
        </Reveal>
      </div>
    </section>
  );
}
