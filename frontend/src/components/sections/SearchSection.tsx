import { useState } from "react";
import { Button } from "@/components/ui/button";

interface SearchSectionProps {
  isLoading: boolean;
  onSearch: (searchData: {
    from: string;
    to: string;
    date: string;
  }) => void;
}

export default function SearchSection({
  onSearch,
  isLoading,
}: SearchSectionProps) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = () => {
    if (!from || !to || !date) {
      alert("Please fill all fields.");
      return;
    }

    onSearch({
      from,
      to,
      date,
    });
  };

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl backdrop-blur">

        <h2 className="mb-8 text-center text-4xl font-bold text-white">
          Search Your Journey
        </h2>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">

          <div className="flex flex-1 items-center gap-3">

            <input
              type="text"
              placeholder="From"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="flex-1 rounded-lg border border-slate-700 bg-slate-950 p-3 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400"
            />

            <button
              onClick={handleSwap}
              className="rounded-full border border-cyan-500 p-3 text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
            >
              ⇄
            </button>

            <input
              type="text"
              placeholder="To"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="flex-1 rounded-lg border border-slate-700 bg-slate-950 p-3 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400"
            />

          </div>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="rounded-lg border border-slate-700 bg-slate-950 p-3 text-white outline-none transition focus:border-cyan-400 lg:w-44"
          />

          <Button
  size="lg"
  className="bg-cyan-500 text-black hover:bg-cyan-400 lg:w-52"
  onClick={handleSearch}
  disabled={isLoading}
>
  {isLoading ? "Searching..." : "Search Trains"}
</Button>

        </div>
      </div>
    </section>
  );
}