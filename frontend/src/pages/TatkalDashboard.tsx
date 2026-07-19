import { useEffect, useMemo, useState } from "react";
import { trains } from "@/data/trains";
import { useBooking } from "@/context/BookingContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const stations = [
  "New Delhi (NDLS)",
  "Mumbai Central (MMCT)",
  "Howrah (HWH)",
  "Chennai Central (MAS)",
  "Bengaluru (SBC)",
  "Lucknow (LKO)",
  "Kanpur Central (CNB)",
  "Prayagraj (PRYJ)",
  "Patna Junction (PNBE)",
  "Varanasi (BSB)",
  "Agra Cantt (AGC)",
  "Jaipur (JP)",
  "Bhopal (BPL)",
  "Ahmedabad (ADI)",
  "Nagpur (NGP)",
];

type SortOption = "ai" | "fare" | "availability" | "duration";

export default function TatkalDashboard() {
  const [secondsLeft, setSecondsLeft] = useState(
    8 * 60 * 60 + 12 * 60 + 45
  );

  const [sortBy, setSortBy] = useState<SortOption>("ai");
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [journeyDate, setJourneyDate] = useState("");
  const { selectedPassenger } = useBooking();
  const navigate = useNavigate();

  const swapStations = () => {
  setFromStation(toStation);
  setToStation(fromStation);
};


  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    

    return () => clearInterval(timer);
  }, []);

  const rankedTrains = useMemo(() => {
    const scored = trains.map((train) => ({
      ...train,
      score:
        train.availability * 2 -
        train.waitingList +
        (1500 - train.fare) / 10 +
        (500 - train.duration) / 10,
    }));

    switch (sortBy) {
      case "fare":
        return [...scored].sort((a, b) => a.fare - b.fare);

      case "availability":
        return [...scored].sort(
          (a, b) => b.availability - a.availability
        );

      case "duration":
        return [...scored].sort(
          (a, b) => a.duration - b.duration
        );

      default:
        return [...scored].sort((a, b) => b.score - a.score);
    }
  }, [sortBy]);

  const hours = String(Math.floor(secondsLeft / 3600)).padStart(2, "0");
  const minutes = String(
    Math.floor((secondsLeft % 3600) / 60)
  ).padStart(2, "0");
  const seconds = String(secondsLeft % 60).padStart(2, "0");

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold">
          Tatkal Dashboard
        </h1>

        <p className="mt-3 text-slate-400">
          AI-powered dashboard for smarter Tatkal bookings.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
  <h2 className="mb-6 text-xl font-semibold text-cyan-400">
    Booking Progress
  </h2>

  <div className="flex flex-wrap items-center justify-between gap-4">

    <div className="flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 font-bold text-black">
        ✓
      </div>
      <span>Passenger</span>
    </div>

    <div className="h-1 flex-1 rounded bg-green-500"></div>

    <div className="flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 font-bold text-black">
        ✓
      </div>
      <span>Journey</span>
    </div>

    <div className="h-1 flex-1 rounded bg-cyan-500"></div>

    <div className="flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 font-bold text-black">
        3
      </div>
      <span>Train</span>
    </div>

    <div className="h-1 flex-1 rounded bg-slate-700"></div>

    <div className="flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700">
        4
      </div>
      <span>Review</span>
    </div>

    <div className="h-1 flex-1 rounded bg-slate-700"></div>

    <div className="flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700">
        5
      </div>
      <span>Confirm</span>
    </div>

  </div>
</div>

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
  <h2 className="mb-5 text-2xl font-bold text-cyan-400">
    🔍 Journey Search
  </h2>

  <div className="grid gap-4 md:grid-cols-4">
    <div>
      <label className="mb-2 block text-sm text-slate-400">
        From
      </label>

      <input
        list="stations"
        value={fromStation}
        onChange={(e) => setFromStation(e.target.value)}
        placeholder="Enter departure station"
        className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 outline-none focus:border-cyan-400"
      />
    </div>

    <div className="flex items-end justify-center">
  <Button
    type="button"
    variant="outline"
    className="w-full border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black"
    onClick={swapStations}
  >
    ⇄ Swap
  </Button>
</div>

    <div>
      <label className="mb-2 block text-sm text-slate-400">
        To
      </label>

      <input
        list="stations"
        value={toStation}
        onChange={(e) => setToStation(e.target.value)}
        placeholder="Enter destination"
        className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 outline-none focus:border-cyan-400"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm text-slate-400">
        Journey Date
      </label>

      <input
        type="date"
        value={journeyDate}
        onChange={(e) => setJourneyDate(e.target.value)}
        className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 outline-none focus:border-cyan-400"
      />
    </div>
  </div>

  <datalist id="stations">
    {stations.map((station) => (
      <option key={station} value={station} />
    ))}
  </datalist>
</div>

        {selectedPassenger && (
  <div className="mt-8 rounded-2xl border border-cyan-500/30 bg-slate-900 p-6 shadow-lg">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-cyan-400">
          👤 Selected Passenger
        </h2>

        <p className="mt-1 text-slate-400">
          Ready for Tatkal booking
        </p>
      </div>

      <div className="rounded-full bg-green-500/20 px-4 py-2 text-green-400">
        ✓ Ready
      </div>
    </div>

    <div className="mt-6 grid gap-4 md:grid-cols-2">
      <div className="rounded-lg bg-slate-800 p-4">
        <p className="text-slate-400">Name</p>
        <p className="text-lg font-semibold">
          {selectedPassenger.name}
        </p>
      </div>

      <div className="rounded-lg bg-slate-800 p-4">
        <p className="text-slate-400">Age</p>
        <p className="text-lg font-semibold">
          {selectedPassenger.age}
        </p>
      </div>

      <div className="rounded-lg bg-slate-800 p-4">
        <p className="text-slate-400">Gender</p>
        <p className="text-lg font-semibold">
          {selectedPassenger.gender}
        </p>
      </div>

      <div className="rounded-lg bg-slate-800 p-4">
        <p className="text-slate-400">Preferred Berth</p>
        <p className="text-lg font-semibold">
          {selectedPassenger.berth}
        </p>
      </div>
    </div>

    <Button
      className="mt-6 w-full bg-cyan-600 hover:bg-cyan-700"
      onClick={() => navigate("/review")}
    >
      🚆 Review Booking
    </Button>
  </div>
)}
        <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-slate-900 p-8 text-center">
          <h2 className="text-2xl font-semibold">
            ⏳ Tatkal Opens In
          </h2>

          <p className="mt-4 text-5xl font-bold text-cyan-400">
            {hours}:{minutes}:{seconds}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <button
            onClick={() => setSortBy("ai")}
            className={`rounded-lg px-4 py-2 transition ${
              sortBy === "ai"
                ? "bg-cyan-500 text-black"
                : "bg-slate-800 hover:bg-slate-700"
            }`}
          >
            ⭐ AI Pick
          </button>

          <button
            onClick={() => setSortBy("fare")}
            className={`rounded-lg px-4 py-2 transition ${
              sortBy === "fare"
                ? "bg-cyan-500 text-black"
                : "bg-slate-800 hover:bg-slate-700"
            }`}
          >
            💰 Cheapest
          </button>

          <button
            onClick={() => setSortBy("availability")}
            className={`rounded-lg px-4 py-2 transition ${
              sortBy === "availability"
                ? "bg-cyan-500 text-black"
                : "bg-slate-800 hover:bg-slate-700"
            }`}
          >
            🚆 Availability
          </button>

          <button
            onClick={() => setSortBy("duration")}
            className={`rounded-lg px-4 py-2 transition ${
              sortBy === "duration"
                ? "bg-cyan-500 text-black"
                : "bg-slate-800 hover:bg-slate-700"
            }`}
          >
            🚀 Fastest
          </button>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {rankedTrains.map((train, index) => (
            <div
              key={train.id}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400 hover:-translate-y-1"
            >
              {index === 0 && sortBy === "ai" && (
                <div className="mb-4 inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-cyan-400">
                  ⭐ AI PICK
                </div>
              )}

              <h2 className="text-2xl font-bold text-white">
                {train.name}
              </h2>

              <p className="mt-4">
                🚆 Seats Available:
                <span className="ml-2 font-semibold text-green-400">
                  {train.availability}
                </span>
              </p>

              <p className="mt-2">
                📈 Waiting List:
                <span className="ml-2 text-yellow-400">
                  WL {train.waitingList}
                </span>
              </p>

              <p className="mt-2">
                💰 Fare:
                <span className="ml-2 text-cyan-400">
                  ₹{train.fare}
                </span>
              </p>

              <p className="mt-2">
                ⏱️ Duration:
                <span className="ml-2 text-white">
                  {Math.floor(train.duration / 60)}h{" "}
                  {train.duration % 60}m
                </span>
              </p>

              <p className="mt-4 text-cyan-400 font-semibold">
                AI Score: {train.score.toFixed(1)}
              </p>

              <div className="mt-4 rounded-lg bg-slate-800 p-3 text-sm text-slate-300">
                {train.score ===
                Math.max(...rankedTrains.map((t) => t.score))
                  ? "Recommended because it balances fare, journey time, and seat availability."
                  : "Good alternative depending on your travel priorities."}
              </div>
              <Button
  className="mt-5 w-full bg-cyan-600 hover:bg-cyan-700"
  onClick={() => navigate("/review")}
>
  🚆 Book This Train
</Button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}