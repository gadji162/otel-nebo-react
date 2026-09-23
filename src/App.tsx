import Header from './components/Header';
import Hero from './components/Hero';
import BookingBand from './components/BookingBand';
import About from './components/About';
import Rooms from './components/Rooms';
import Restaurant from './components/Restaurant';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { BookingModalProvider } from './context/BookingModalContext';

export default function App() {
  return (
    <BookingModalProvider>
      <Header />
      <main>
        <Hero />
        <BookingBand />
        <About />
        <Rooms />
        <Restaurant />
        <Reviews />
        <Location />
      </main>
      <Footer />
      <BookingModal />
    </BookingModalProvider>
  );
}
