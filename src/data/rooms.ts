export interface Room {
  id: string;
  name: string;
  meta: string;
  price: string;
  image: string;
  alt: string;
}

// Данные примерные — ЗАМЕНИТЬ реальными описаниями, ценами и фото
export const rooms: Room[] = [
  {
    id: 'standart',
    name: 'Стандарт',
    meta: '20 м²',
    price: 'от 4 000 ₽',
    image: '/assets/photos/room-standart.jpg',
    alt: 'Номер «Стандарт»',
  },
  {
    id: 'komfort',
    name: 'Комфорт с видом на озеро',
    meta: 'Вид на озеро Ак-Гёль',
    price: 'от 6 000 ₽',
    image: '/assets/photos/room-komfort.jpg',
    alt: 'Номер «Комфорт с видом на озеро»',
  },
  {
    id: 'lux',
    name: 'Люкс',
    meta: '45 м²',
    price: 'от 12 000 ₽',
    image: '/assets/photos/room-lux.jpg',
    alt: 'Номер «Люкс»',
  },
];
