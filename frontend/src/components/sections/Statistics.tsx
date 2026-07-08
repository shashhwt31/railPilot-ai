export default function Statistics() {
  const stats = [
    {
      value: "50K+",
      label: "Happy Travelers",
    },
    {
      value: "1M+",
      label: "Routes Analyzed",
    },
    {
      value: "95%",
      label: "Prediction Accuracy",
    },
    {
      value: "24×7",
      label: "AI Assistance",
    },
  ];

  return (
    <section className="bg-slate-950 py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-bold text-white">
          Trusted by Railway Travelers
        </h2>

        <p className="mt-4 text-center text-slate-400">
          Helping thousands of users discover smarter and faster train journeys.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-8 text-center transition hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <h3 className="text-4xl font-bold text-cyan-400">
                {stat.value}
              </h3>

              <p className="mt-3 text-slate-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}