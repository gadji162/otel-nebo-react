import type { FormEvent } from 'react';
import { useBookingModal } from '../context/BookingModalContext';

export default function BookingBand() {
  const { open } = useBookingModal();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    open();
  };

  return (
    <section className="booking-band" id="booking">
      <div className="container">
        {/*
          ===== TravelLine: ФОРМА ПОИСКА / БРОНИРОВАНИЯ =====
          Ниже — визуальная заглушка формы поиска номеров.
          Когда будет готов модуль TravelLine, замените форму ниже
          на виджет/модальное окно TravelLine (обычно <div id="travelline-widget">
          либо inline-скрипт, который сам рендерит форму в этот контейнер).
        */}
        <form className="booking-form" id="booking-form" onSubmit={handleSubmit}>
          <div className="booking-field">
            <label htmlFor="checkin">Заезд</label>
            <input type="text" id="checkin" name="checkin" placeholder="Выберите дату" autoComplete="off" />
          </div>
          <div className="booking-field">
            <label htmlFor="checkout">Выезд</label>
            <input type="text" id="checkout" name="checkout" placeholder="Выберите дату" autoComplete="off" />
          </div>
          <div className="booking-field">
            <label htmlFor="guests">Гости</label>
            <input type="text" id="guests" name="guests" placeholder="2 взрослых" autoComplete="off" />
          </div>
          <button type="submit" className="btn btn-primary booking-submit">
            Найти номер
          </button>
        </form>
        {/* ===== /TravelLine форма ===== */}
      </div>
    </section>
  );
}
