import { Button } from "@/components/ui/button";

interface PassengerFormProps {
  name: string;
  setName: (value: string) => void;
  age: string;
  setAge: (value: string) => void;
  gender: string;
  setGender: (value: string) => void;
  berth: string;
  setBerth: (value: string) => void;
  onSave: () => void;
  buttonText: string;
}

export default function PassengerForm({
  name,
  setName,
  age,
  setAge,
  gender,
  setGender,
  berth,
  setBerth,
  onSave,
  buttonText,
}: PassengerFormProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
      <div className="grid gap-6 md:grid-cols-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          className="rounded-lg border border-slate-700 bg-slate-950 p-3"
        />

        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
          placeholder="Age"
          className="rounded-lg border border-slate-700 bg-slate-950 p-3"
        />

        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="rounded-lg border border-slate-700 bg-slate-950 p-3"
        >
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <select
          value={berth}
          onChange={(e) => setBerth(e.target.value)}
          className="rounded-lg border border-slate-700 bg-slate-950 p-3"
        >
          <option>Lower Berth</option>
          <option>Middle Berth</option>
          <option>Upper Berth</option>
          <option>Side Lower</option>
          <option>Side Upper</option>
          <option>No Preference</option>
        </select>
      </div>

      <Button
        onClick={onSave}
        className="mt-8"
      >
        {buttonText}
      </Button>
    </div>
  );
}