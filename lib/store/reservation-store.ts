import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Reservation {
  id: string;
  date: Date;
  time: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
  specialRequests?: string;
}

interface ReservationStore {
  reservations: Reservation[];
  addReservation: (reservation: Omit<Reservation, 'id'>) => void;
  updateReservation: (id: string, reservation: Partial<Reservation>) => void;
  cancelReservation: (id: string) => void;
  getReservation: (id: string) => Reservation | undefined;
}

export const useReservationStore = create<ReservationStore>()(
  persist(
    (set, get) => ({
      reservations: [],
      addReservation: (reservation) =>
        set((state) => ({
          reservations: [
            ...state.reservations,
            { ...reservation, id: crypto.randomUUID() },
          ],
        })),
      updateReservation: (id, reservation) =>
        set((state) => ({
          reservations: state.reservations.map((r) =>
            r.id === id ? { ...r, ...reservation } : r
          ),
        })),
      cancelReservation: (id) =>
        set((state) => ({
          reservations: state.reservations.filter((r) => r.id !== id),
        })),
      getReservation: (id) => {
        const { reservations } = get();
        return reservations.find((r) => r.id === id);
      },
    }),
    {
      name: 'reservation-storage',
    }
  )
);