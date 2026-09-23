import Reveal from './Reveal';

export default function Location() {
  return (
    <section className="location" id="location">
      <div className="container location-grid">
        <Reveal as="div" className="location-text">
          <span className="eyebrow">Расположение</span>
          <h2 className="section-title">
            У парка
            <br />
            и озера Ак-Гёль
          </h2>
          <p className="location-address">Петра Первого, 94, Махачкала</p>
          <ul className="location-list">
            <li>Озеро Ак-Гёль — рядом</li>
            <li>Городской парк — в шаговой доступности</li>
            <li>Каспийское море — недалеко</li>
            <li>Центр Махачкалы — в пределах короткой поездки</li>
          </ul>
        </Reveal>
        <Reveal as="div" className="location-map">
          <div className="map-frame">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Aec7551b575b3093d3d3c197d7b973c09b1d3bdd49fe5b0602cd8ce264edd1d3a&source=constructor"
              frameBorder={0}
              loading="lazy"
              title="Отель «Небо» на карте"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
