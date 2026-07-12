import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { routes } from "@/data/routes";

type SortOption = "ai" | "fare" | "duration" | "transfers";

export default function RoutePlanner() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>("ai");

  const rankedRoutes = useMemo(() => {
    const scored = routes.map((route) => ({
      ...route,
      score:
        (1500 - route.fare) / 10 +
        (500 - route.duration) / 10 +
        (3 - route.transfers) * 20,
    }));

    switch (sortBy) {
      case "fare":
        return [...scored].sort((a, b) => a.fare - b.fare);

      case "duration":
        return [...scored].sort((a, b) => a.duration - b.duration);

      case "transfers":
        return [...scored].sort((a, b) => a.transfers - b.transfers);

      default:
        return [...scored].sort((a, b) => b.score - a.score);
    }
  }, [sortBy]);

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold">
          Smart Route Planner
        </h1>

        <p className="mt-3 text-slate-400">
          Compare routes and let RailPilot AI recommend the best journey.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <input
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="From Station"
              className="rounded-lg border border-slate-700 bg-slate-950 p-3"
            />

            <input
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="To Station"
              className="rounded-lg border border-slate-700 bg-slate-950 p-3"
            />
          </div>

          <Button
            className="mt-8"
            onClick={() => setShowResults(true)}
          >
            Search Routes
          </Button>
        </div>

        {showResults && (
          <>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button onClick={() => setSortBy("ai")}>
                ⭐ AI Pick
              </Button>

              <Button onClick={() => setSortBy("fare")}>
                💰 Cheapest
              </Button>

              <Button onClick={() => setSortBy("duration")}>
                🚀 Fastest
              </Button>

              <Button onClick={() => setSortBy("transfers")}>
                🔄 Least Transfers
              </Button>
            </div>

            <div className="mt-8 grid gap-6">
              {rankedRoutes.map((route, index) => (
                <div
                  key={route.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
                >
                  {index === 0 && sortBy === "ai" && (
                    <div className="mb-4 inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-cyan-400">
                      ⭐ AI BEST ROUTE
                    </div>
                  )}

                  <h2 className="text-2xl font-bold">
                    {route.train}
                  </h2>

                  <div className="mt-4 grid gap-3 md:grid-cols-4">
                    <p>
                      ⏱️ {Math.floor(route.duration / 60)}h{" "}
                      {route.duration % 60}m
                    </p>

                    <p>💰 ₹{route.fare}</p>

                    <p>🔄 {route.transfers}</p>

                    <p>⭐ {route.score.toFixed(1)}</p>
                  </div>

                  <p className="mt-4 text-slate-400">
                    {from || "Source"} → {to || "Destination"}
                  </p>

                  <div className="mt-4 rounded-lg bg-slate-800 p-3 text-sm text-slate-300">
                    {index === 0 && sortBy === "ai"
                      ? "Recommended because it balances travel time, fare, and convenience."
                      : "A good alternative depending on your priorities."}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}