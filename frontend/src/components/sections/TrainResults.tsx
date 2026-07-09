interface TrainResultsProps {
  from: string;
  to: string;
  date: string;
}

export default function TrainResults({
  from,
  to,
  date,
}: TrainResultsProps) {
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
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold text-white">
          Recommended Trains
        </h2>

        <p className="mt-4 text-center text-cyan-400 text-lg">
          {from} → {to}
        </p>

        <p className="text-center text-slate-400">
          Journey Date: {date}
        </p>

        <div className="mt-12 space-y-6">
          {trains.map((train) => (
            <div
              key={train.number}
              className="rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-6"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
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
                    <p className="font-semibold text-cyan-400">
                      {train.departure}
                    </p>
                    <p className="text-sm text-slate-400">
                      Departure
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-cyan-400">
                      {train.arrival}
                    </p>
                    <p className="text-sm text-slate-400">
                      Arrival
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-cyan-400">
                      {train.duration}
                    </p>
                    <p className="text-sm text-slate-400">
                      Duration
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-bold text-white">
                    {train.price}
                  </p>

                  <span className="mt-2 inline-block rounded-full bg-cyan-500/20 px-4 py-1 text-cyan-400">
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