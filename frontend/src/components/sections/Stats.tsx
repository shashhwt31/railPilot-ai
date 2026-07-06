export default function Stats() {
  const stats = [
    {
      value: "50K+",
      label: "Journey Searches",
    },
    {
      value: "98%",
      label: "Route Accuracy",
    },
    {
      value: "24/7",
      label: "Availability",
    },
    {
      value: "120+",
      label: "Stations Supported",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white">
          Trusted by Railway Travelers
        </h2>

        <p className="mt-4 text-slate-400">
          Built to make railway planning smarter, faster, and stress-free.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-cyan-500/20 bg-slate-900/50 p-8"
            >
              <h3 className="text-4xl font-bold text-cyan-400">
                {item.value}
              </h3>

              <p className="mt-3 text-slate-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}