export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Search Journey",
      description: "Enter your source, destination and travel date.",
    },
    {
      number: "02",
      title: "AI Analyzes Routes",
      description: "RailPilot AI compares routes, fares and seat availability.",
    },
    {
      number: "03",
      title: "Compare Options",
      description: "View the fastest, cheapest and best-value trains instantly.",
    },
    {
      number: "04",
      title: "Book Faster",
      description: "Choose your train and continue to booking with confidence.",
    },
  ];

  return (
    <section className="bg-slate-950 py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-bold text-white">
          How RailPilot Works
        </h2>

        <p className="mt-4 text-center text-slate-400">
          Four simple steps to plan your railway journey smarter.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-8 transition hover:border-cyan-400 hover:-translate-y-2"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/20 text-xl font-bold text-cyan-400">
                {step.number}
              </div>

              <h3 className="text-xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-3 text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
