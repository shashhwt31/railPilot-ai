import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface Passenger {
  id: number;
  name: string;
  age: string;
  gender: string;
  berth: string;
}

export default function PassengerVault() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [berth, setBerth] = useState("Lower Berth");

  const [passengers, setPassengers] = useState<Passenger[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("passengers");

    if (saved) {
      setPassengers(JSON.parse(saved));
    }
  }, []);

  const savePassenger = () => {
    if (!name || !age) {
      alert("Please fill all fields.");
      return;
    }

    const newPassenger: Passenger = {
      id: Date.now(),
      name,
      age,
      gender,
      berth,
    };

    const updatedPassengers = [...passengers, newPassenger];

    setPassengers(updatedPassengers);

    localStorage.setItem(
      "passengers",
      JSON.stringify(updatedPassengers)
    );

    setName("");
    setAge("");
    setGender("Male");
    setBerth("Lower Berth");
  };

  const deletePassenger = (id: number) => {
    const updatedPassengers = passengers.filter(
      (passenger) => passenger.id !== id
    );

    setPassengers(updatedPassengers);

    localStorage.setItem(
      "passengers",
      JSON.stringify(updatedPassengers)
    );
  };

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold">
          Passenger Vault
        </h1>

        <p className="mt-3 text-slate-400">
          Securely save passenger details for one-click railway bookings.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-8">
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
            onClick={savePassenger}
            className="mt-8"
          >
            Save Passenger
          </Button>
        </div>

        <div className="mt-12">
          <h2 className="mb-6 text-3xl font-bold">
            Saved Passengers
          </h2>

          {passengers.length === 0 ? (
            <p className="text-slate-400">
              No passengers saved yet.
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {passengers.map((passenger) => (
                <div
                  key={passenger.id}
                  className="rounded-xl border border-slate-800 bg-slate-900 p-6"
                >
                  <h3 className="text-xl font-bold text-cyan-400">
                    {passenger.name}
                  </h3>

                  <p className="mt-2">
                    <strong>Age:</strong> {passenger.age}
                  </p>

                  <p>
                    <strong>Gender:</strong> {passenger.gender}
                  </p>

                  <p>
                    <strong>Preferred Berth:</strong> {passenger.berth}
                  </p>

                  <Button
                    onClick={() => deletePassenger(passenger.id)}
                    className="mt-5"
                    variant="destructive"
                  >
                    Delete
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}