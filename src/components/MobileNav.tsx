import { useBookingModal } from '../context/BookingModalContext';

interface NavLink {
  href: string;
  label: string;
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}

export default function MobileNav({ isOpen, onClose, links }: MobileNavProps) {
  const { open: openBooking } = useBookingModal();

  return (
    <div className={`mobile-nav${isOpen ? ' is-open' : ''}`} id="mobile-nav">
      {links.map((link) => (
        <a key={link.href} href={link.href} className="mobile-nav-link" onClick={onClose}>
          {link.label}
        </a>
      ))}
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => {
          onClose();
          openBooking();
        }}
      >
        Забронировать
      </button>
    </div>
  );
}
