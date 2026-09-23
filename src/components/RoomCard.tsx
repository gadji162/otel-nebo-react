import Reveal from './Reveal';
import { useBookingModal } from '../context/BookingModalContext';
import type { Room } from '../data/rooms';

interface RoomCardProps {
  room: Room;
}

export default function RoomCard({ room }: RoomCardProps) {
  const { open } = useBookingModal();

  return (
    <Reveal as="article" className="room-card" onClick={open}>
      <img src={room.image} alt={room.alt} className="room-media" />
      <div className="room-gradient" />
      <div className="room-content">
        <h3>{room.name}</h3>
        <p className="room-meta">{room.meta}</p>
        <div className="room-footer">
          <span className="room-price">{room.price}</span>
          {/* Клик по кнопке всплывает к обработчику клика карточки — отдельный onClick не нужен */}
          <button className="btn btn-light room-btn" type="button">
            Забронировать
          </button>
        </div>
      </div>
    </Reveal>
  );
}
