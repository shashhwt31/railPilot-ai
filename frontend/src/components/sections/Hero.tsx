import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
      <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
        🚆 AI-Powered Railway Assistant
      </span>

      <h1 className="mt-8 text-6xl font-extrabold leading-tight">
        Travel Smarter with
        <span className="block text-cyan-400">
          RailPilot AI
        </span>
      </h1>

      <p className="mt-6 max-w-3xl text-lg text-slate-300">
        Plan the fastest routes, predict ticket prices, receive seat
        availability alerts, and optimize every railway journey using AI.
      </p>

      <div className="mt-10 flex gap-4">
        <Button size="lg">Get Started</Button>
        <Button
  size="lg"
  className="bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
>
  Learn More
</Button>
      </div>
    </section>
  );
}