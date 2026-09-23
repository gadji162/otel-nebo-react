import Reveal from './Reveal';
import RoomCard from './RoomCard';
import { rooms } from '../data/rooms';

export default function Rooms() {
  return (
    <section className="rooms" id="rooms">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Номера</span>
          <h2 className="section-title">Коллекция номеров</h2>
        </Reveal>

        <div className="rooms-grid">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
