export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Daily Commuter",
      review:
        "RailPilot AI helped me find a faster route and saved nearly an hour on my journey.",
    },
    {
      name: "Priya Verma",
      role: "College Student",
      review:
        "The AI recommendations and train comparisons make planning trips incredibly easy.",
    },
    {
      name: "Aman Gupta",
      role: "Business Traveler",
      review:
        "Clean interface, useful recommendations and a much better experience than searching manually.",
    },
  ];

  return (
    <section className="bg-slate-950 py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-bold text-white">
          What Our Users Say
        </h2>

        <p className="mt-4 text-center text-slate-400">
          Trusted by railway travelers across India.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-8 transition hover:border-cyan-400 hover:-translate-y-2"
            >
              <div className="mb-4 text-yellow-400 text-xl">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-slate-300">
                "{review.review}"
              </p>

              <div className="mt-6">
                <h3 className="font-semibold text-white">
                  {review.name}
                </h3>

                <p className="text-sm text-cyan-400">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}