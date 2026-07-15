import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function BookingConfirmation() {
  const navigate = useNavigate();

  const pnr = Math.floor(
    1000000000 + Math.random() * 9000000000
  );

  const bookingId = `RP-${Math.floor(
    100000 + Math.random() * 900000
  )}`;

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-3xl rounded-2xl border border-green-500/20 bg-slate-900 p-10 text-center">

        <div className="text-7xl">✅</div>

        <h1 className="mt-6 text-4xl font-bold text-green-400">
          Booking Confirmed
        </h1>

        <p className="mt-3 text-slate-400">
          Your mock Tatkal booking has been successfully generated.
        </p>

        <div className="mt-10 space-y-4 text-left">

          <div className="rounded-lg bg-slate-800 p-4">
            <p className="text-slate-400">PNR Number</p>
            <p className="text-2xl font-bold">
              {pnr}
            </p>
          </div>

          <div className="rounded-lg bg-slate-800 p-4">
            <p className="text-slate-400">Booking ID</p>
            <p className="text-xl font-semibold">
              {bookingId}
            </p>
          </div>

          <div className="rounded-lg bg-slate-800 p-4">
            <p>Coach : B2</p>
            <p>Seat : 35</p>
            <p>Status : Confirmed</p>
          </div>

        </div>

        <Button
          className="mt-10 w-full"
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>

      </div>
    </main>
  );
}