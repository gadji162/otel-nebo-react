import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

interface BookingModalContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const BookingModalContext = createContext<BookingModalContextValue | undefined>(undefined);

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <BookingModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  const ctx = useContext(BookingModalContext);
  if (!ctx) {
    throw new Error('useBookingModal должен использоваться внутри BookingModalProvider');
  }
  return ctx;
}
