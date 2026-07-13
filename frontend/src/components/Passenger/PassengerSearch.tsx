interface PassengerSearchProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function PassengerSearch({
  search,
  setSearch,
}: PassengerSearchProps) {
  return (
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="🔍 Search passengers..."
      className="mb-6 w-full rounded-lg border border-slate-700 bg-slate-900 p-3 text-white outline-none focus:border-cyan-500"
    />
  );
}