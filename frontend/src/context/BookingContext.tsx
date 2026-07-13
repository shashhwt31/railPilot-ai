import { createContext, useContext, useState } from "react";
import type { Passenger } from "@/components/Passenger/PassengerCard";

interface BookingContextType {
  selectedPassenger: Passenger | null;
  setSelectedPassenger: (passenger: Passenger | null) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedPassenger, setSelectedPassenger] =
    useState<Passenger | null>(null);

  return (
    <BookingContext.Provider
      value={{
        selectedPassenger,
        setSelectedPassenger,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);

  if (!context) {
    throw new Error(
      "useBooking must be used inside BookingProvider"
    );
  }

  return context;
}