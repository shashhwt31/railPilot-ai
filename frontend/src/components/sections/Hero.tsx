import { Button } from "@/components/ui/button";


export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 pt-24 pb-32">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        {/* Badge */}
        <div className="mb-6 inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-400">
          🚆 AI-Powered Railway Assistant
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
          Travel Smarter with
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            RailPilot AI
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
          Plan the fastest routes, predict ticket prices, receive seat
          availability alerts, and optimize every railway journey using AI.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Button
            size="lg"
            className="bg-cyan-500 text-black hover:bg-cyan-400"
          >
            Get Started
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black"
          >
            Learn More
          </Button>

        </div>

      </div>
    </section>
  );
}