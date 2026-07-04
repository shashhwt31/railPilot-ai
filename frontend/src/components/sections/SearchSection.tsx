import { Button } from "@/components/ui/button";

export default function SearchSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl backdrop-blur">

        <h2 className="mb-8 text-center text-4xl font-bold text-white">
          Search Your Journey
        </h2>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">

          {/* From - Swap - To */}
          <div className="flex flex-1 items-center gap-3">

            <input
              type="text"
              placeholder="From"
              className="flex-1 rounded-lg border border-slate-700 bg-slate-950 p-3 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400"
            />

            <button
              className="rounded-full border border-cyan-500 p-3 text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
            >
              ⇄
            </button>

            <input
              type="text"
              placeholder="To"
              className="flex-1 rounded-lg border border-slate-700 bg-slate-950 p-3 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400"
            />

          </div>

          {/* Date */}

          <input
            type="date"
            className="rounded-lg border border-slate-700 bg-slate-950 p-3 text-white outline-none transition focus:border-cyan-400 lg:w-44"
          />

          {/* Search Button */}

          <Button
            size="lg"
            className="bg-cyan-500 text-black hover:bg-cyan-400 lg:w-52"
          >
            Search Trains
          </Button>

        </div>

      </div>
    </section>
  );
}