import { useBooking } from "@/context/BookingContext";
import { Button } from "@/components/ui/button";

export default function BookingReview() {
  const { selectedPassenger } = useBooking();

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-800 bg-slate-900 p-8">

        <h1 className="text-4xl font-bold">
          Booking Review
        </h1>

        <p className="mt-3 text-slate-400">
          Review your booking details before proceeding.
        </p>

        {selectedPassenger ? (
          <>
            <div className="mt-8 space-y-4">
              <div className="rounded-lg bg-slate-800 p-4">
                <p className="text-slate-400">Passenger</p>
                <p className="text-xl font-semibold">
                  {selectedPassenger.name}
                </p>
              </div>

              <div className="rounded-lg bg-slate-800 p-4">
                <p>Age: {selectedPassenger.age}</p>
                <p>Gender: {selectedPassenger.gender}</p>
                <p>Preferred Berth: {selectedPassenger.berth}</p>
              </div>

              <div className="rounded-lg bg-slate-800 p-4">
                <p>🚆 Train: Rajdhani Express</p>
                <p>📍 Delhi → Mumbai</p>
                <p>💰 Fare: ₹945</p>
              </div>
            </div>

            <Button className="mt-8 w-full">
              Confirm Booking
            </Button>
          </>
        ) : (
          <p className="mt-8 text-red-400">
            No passenger selected.
          </p>
        )}
      </div>
    </main>
  );
}