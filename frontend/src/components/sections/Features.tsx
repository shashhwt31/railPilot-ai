export default function Features() {
  const features = [
    {
      title: "Passenger Vault",
      description: "Securely save traveller details for faster bookings.",
    },
    {
      title: "Smart Route Planner",
      description: "Discover alternate routes with better availability.",
    },
    {
      title: "Nearby Station Optimizer",
      description: "Find nearby stations to improve your booking chances.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-12 text-center text-4xl font-bold">
        Why RailPilot AI?
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
            <p className="text-slate-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}