import type { MouseEvent } from 'react';
import { useBookingModal } from '../context/BookingModalContext';

export default function BookingModal() {
  const { isOpen, close } = useBookingModal();

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) close();
  };

  return (
    <div
      className={`modal-overlay${isOpen ? ' is-open' : ''}`}
      id="booking-modal"
      aria-hidden={!isOpen}
      onClick={handleOverlayClick}
    >
      <div className="modal-box" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close" id="modal-close" type="button" aria-label="Закрыть" onClick={close}>
          &times;
        </button>
        <h3 id="modal-title">Скоро можно будет забронировать онлайн</h3>
        <p>Онлайн-бронирование скоро будет доступно. Пока свяжитесь с нами удобным способом:</p>
        <div className="modal-contacts">
          <a href="tel:+79882912222">+7 988 291 2222</a>
          <a href="https://t.me/hotel05" target="_blank" rel="noopener noreferrer">
            Telegram: @hotel05
          </a>
          <a href="mailto:nebo05@yandex.ru">nebo05@yandex.ru</a>
        </div>
      </div>
    </div>
  );
}
