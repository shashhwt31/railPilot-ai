import { useMemo, useState } from "react";

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
  stations: string[];
  placeholder: string;
}

export default function StationAutocomplete({
  label,
  value,
  onChange,
  stations,
  placeholder,
}: Props) {
  const [open, setOpen] = useState(false);

  const filteredStations = useMemo(() => {
    if (!value) return [];

    return stations.filter((station) =>
      station.toLowerCase().includes(value.toLowerCase())
    );
  }, [value, stations]);

  return (
    <div className="relative">
      <label className="mb-2 block text-sm text-slate-400">
        {label}
      </label>

      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 outline-none focus:border-cyan-400"
      />

      {open && filteredStations.length > 0 && (
        <div className="absolute z-20 mt-1 max-h-56 w-full overflow-y-auto rounded-lg border border-slate-700 bg-slate-900 shadow-xl">
          {filteredStations.map((station) => (
            <button
              key={station}
              type="button"
              onClick={() => {
                onChange(station);
                setOpen(false);
              }}
              className="block w-full px-4 py-3 text-left transition hover:bg-cyan-500 hover:text-black"
            >
              {station}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}