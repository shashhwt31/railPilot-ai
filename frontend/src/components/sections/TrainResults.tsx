export default function TrainResults() {
  const trains = [
    {
      name: "Rajdhani Express",
      number: "12951",
      departure: "06:15",
      arrival: "12:30",
      duration: "6h 15m",
      price: "₹945",
      status: "Available",
    },
    {
      name: "Vande Bharat",
      number: "22436",
      departure: "08:00",
      arrival: "13:10",
      duration: "5h 10m",
      price: "₹1195",
      status: "Fastest",
    },
    {
      name: "Shatabdi Express",
      number: "12002",
      departure: "09:30",
      arrival: "15:40",
      duration: "6h 10m",
      price: "₹875",
      status: "Best Value",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center">
          Recommended Trains
        </h2>

        <p className="mt-4 text-center text-slate-400">
          AI ranked these trains based on speed, availability and pricing.
        </p>

        <div className="mt-12 space-y-6">
          {trains.map((train) => (
            <div
              key={train.number}
              className="rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {train.name}
                  </h3>

                  <p className="text-slate-400">
                    #{train.number}
                  </p>
                </div>

                <div className="flex gap-10 text-center">
                  <div>
                    <p className="text-cyan-400 font-semibold">
                      {train.departure}
                    </p>
                    <p className="text-slate-400 text-sm">
                      Departure
                    </p>
                  </div>

                  <div>
                    <p className="text-cyan-400 font-semibold">
                      {train.arrival}
                    </p>
                    <p className="text-slate-400 text-sm">
                      Arrival
                    </p>
                  </div>

                  <div>
                    <p className="text-cyan-400 font-semibold">
                      {train.duration}
                    </p>
                    <p className="text-slate-400 text-sm">
                      Duration
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-bold text-white">
                    {train.price}
                  </p>

                  <span className="inline-block mt-2 rounded-full bg-cyan-500/20 px-4 py-1 text-cyan-400">
                    {train.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}