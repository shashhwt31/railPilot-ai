import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { trains } from "@/data/trains";
import { useBooking } from "@/context/BookingContext";

import BookingProgress from "@/components/BookingProgress";
import TrainDetailsModal from "@/components/TrainDetailsModal";
import StationAutocomplete from "@/components/StationAutocomplete";
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
  const navigate = useNavigate();
  const { selectedPassenger } = useBooking();

  const [secondsLeft, setSecondsLeft] = useState(
    8 * 60 * 60 + 12 * 60 + 45
  );

  const [sortBy, setSortBy] =
    useState<SortOption>("ai");

  const [fromStation, setFromStation] =
    useState("");

  const [toStation, setToStation] =
    useState("");

  const [journeyDate, setJourneyDate] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [selectedTrain, setSelectedTrain] = useState<any>(null);

  const [modalOpen, setModalOpen] =
    useState(false);

  const swapStations = () => {
    setFromStation(toStation);
    setToStation(fromStation);
  };

  const handleSearch = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) =>
        prev > 0 ? prev - 1 : 0
      );
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
        return [...scored].sort(
          (a, b) => a.fare - b.fare
        );

      case "availability":
        return [...scored].sort(
          (a, b) =>
            b.availability - a.availability
        );

      case "duration":
        return [...scored].sort(
          (a, b) =>
            a.duration - b.duration
        );

      default:
        return [...scored].sort(
          (a, b) => b.score - a.score
        );
    }
  }, [sortBy]);

  const hours = String(
    Math.floor(secondsLeft / 3600)
  ).padStart(2, "0");

  const minutes = String(
    Math.floor((secondsLeft % 3600) / 60)
  ).padStart(2, "0");

  const seconds = String(
    secondsLeft % 60
  ).padStart(2, "0");

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">

        <h1 className="text-4xl font-bold">
          Tatkal Dashboard
        </h1>

        <p className="mt-3 text-slate-400">
          AI-powered dashboard for smarter Tatkal
          bookings.
        </p>

        <BookingProgress currentStep={3} />

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <h2 className="mb-5 text-2xl font-bold text-cyan-400">
            🔍 Journey Search
          </h2>

          <div className="grid gap-4 md:grid-cols-4">

            <StationAutocomplete
              label="From"
              value={fromStation}
              onChange={setFromStation}
              stations={stations}
              placeholder="Departure Station"
            />

            <div className="flex items-end justify-center">

              <Button
                variant="outline"
                className="w-full border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black"
                onClick={swapStations}
              >
                ⇄ Swap
              </Button>

            </div>

            <StationAutocomplete
              label="To"
              value={toStation}
              onChange={setToStation}
              stations={stations}
              placeholder="Destination Station"
            />

            <div>

              <label className="mb-2 block text-sm text-slate-400">
                Journey Date
              </label>

              <input
                type="date"
                value={journeyDate}
                onChange={(e) =>
                  setJourneyDate(e.target.value)
                }
                className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 outline-none focus:border-cyan-400"
              />

            </div>

            <div className="md:col-span-4">

              <Button
                className="w-full bg-cyan-600 hover:bg-cyan-700"
                onClick={handleSearch}
                disabled={loading}
              >
                {loading
                  ? "Searching Trains..."
                  : "🔍 Search Trains"}
              </Button>

            </div>

          </div>

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
                <p className="text-slate-400">
                  Preferred Berth
                </p>
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

        <div className="mt-10">

          {loading ? (

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-12 text-center">

              <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent"></div>

              <h2 className="mt-6 text-2xl font-bold">
                Searching Best Trains...
              </h2>

              <p className="mt-2 text-slate-400">
                AI is analyzing fare, availability and duration.
              </p>

            </div>

          ) : (

            <div className="grid gap-6 lg:grid-cols-3">

              {rankedTrains.map((train, index) => (
                              <div
                key={train.id}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-xl"
              >
                {index === 0 && sortBy === "ai" && (
                  <div className="mb-4 inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-sm font-semibold text-cyan-400">
                    ⭐ AI PICK
                  </div>
                )}

                <h2 className="text-2xl font-bold">
                  {train.name}
                </h2>

                <div className="mt-6 flex items-center justify-between">

                  <div>
                    <p className="text-sm text-slate-400">
                      Availability
                    </p>

                    <span className="mt-2 inline-flex rounded-full bg-green-500/20 px-3 py-1 font-semibold text-green-400">
                      {train.availability} Seats
                    </span>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-slate-400">
                      Waiting List
                    </p>

                    <span className="mt-2 inline-flex rounded-full bg-yellow-500/20 px-3 py-1 font-semibold text-yellow-400">
                      WL {train.waitingList}
                    </span>
                  </div>

                </div>

                <div className="mt-6 space-y-2">

                  <div className="flex justify-between">
                    <span className="text-slate-400">
                      Fare
                    </span>

                    <span className="font-semibold text-cyan-400">
                      ₹{train.fare}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-400">
                      Duration
                    </span>

                    <span>
                      {Math.floor(train.duration / 60)}h{" "}
                      {train.duration % 60}m
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-400">
                      AI Score
                    </span>

                    <span className="font-bold text-cyan-400">
                      {train.score.toFixed(1)}
                    </span>
                  </div>

                </div>

                <div className="mt-6 rounded-lg bg-slate-800 p-4 text-sm text-slate-300">
                  {index === 0 && sortBy === "ai"
                    ? "Recommended because it provides the best balance of fare, availability and travel time."
                    : "A strong alternative depending on your booking preference."}
                </div>

                <Button
                  variant="outline"
                  className="mt-5 w-full border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black"
                  onClick={() => {
                    setSelectedTrain(train);
                    setModalOpen(true);
                  }}
                >
                  View Details
                </Button>

                <Button
                  className="mt-4 w-full bg-cyan-600 hover:bg-cyan-700"
                  onClick={() => navigate("/review")}
                >
                  🚆 Book This Train
                </Button>
              </div>
                        ))}
          </div>
        )}
            </div>

    </div>

    <TrainDetailsModal
        train={selectedTrain}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </main>
  );
}