export default function TatkalDashboard() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold">
          Tatkal Dashboard
        </h1>

        <p className="mt-3 text-slate-400">
          Compare trains, monitor seat availability, and book faster.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">🚆 Live Seat Availability</h2>
            <p className="mt-4 text-green-400">AVAILABLE 42</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">📈 Waiting List Trend</h2>
            <p className="mt-4 text-yellow-400">WL 12 → WL 6</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">💰 Fare Comparison</h2>
            <p className="mt-4">₹945 • ₹875 • ₹1195</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">⏱ Booking Timer</h2>
            <p className="mt-4 text-cyan-400">Opens in 08:12:45</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">⭐ AI Recommendation</h2>
            <p className="mt-4">Rajdhani Express</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">📍 Nearby Stations</h2>
            <p className="mt-4">
              New Delhi • Anand Vihar • Hazrat Nizamuddin
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}