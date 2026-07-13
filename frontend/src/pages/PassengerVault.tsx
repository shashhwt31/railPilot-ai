import { useEffect, useState } from "react";

import PassengerCard from "@/components/Passenger/PassengerCard";
import type { Passenger } from "@/components/Passenger/PassengerCard";

import PassengerForm from "@/components/Passenger/PassengerForm";
import PassengerSearch from "@/components/Passenger/PassengerSearch";

export default function PassengerVault() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [berth, setBerth] = useState("Lower Berth");

  const [search, setSearch] = useState("");

  const [editingId, setEditingId] = useState<number | null>(null);

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

    if (editingId !== null) {
      const updated = passengers.map((p) =>
        p.id === editingId
          ? {
              ...p,
              name,
              age,
              gender,
              berth,
            }
          : p
      );

      setPassengers(updated);
      localStorage.setItem(
        "passengers",
        JSON.stringify(updated)
      );

      setEditingId(null);
    } else {
      const updated = [
        ...passengers,
        {
          id: Date.now(),
          name,
          age,
          gender,
          berth,
          favorite: false,
        },
      ];

      setPassengers(updated);

      localStorage.setItem(
        "passengers",
        JSON.stringify(updated)
      );
    }

    setName("");
    setAge("");
    setGender("Male");
    setBerth("Lower Berth");
  };

  const editPassenger = (passenger: Passenger) => {
    setEditingId(passenger.id);

    setName(passenger.name);
    setAge(passenger.age);
    setGender(passenger.gender);
    setBerth(passenger.berth);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const deletePassenger = (id: number) => {
    const updated = passengers.filter(
      (p) => p.id !== id
    );

    setPassengers(updated);

    localStorage.setItem(
      "passengers",
      JSON.stringify(updated)
    );
  };

  const toggleFavorite = (id: number) => {
    const updated = passengers.map((p) =>
      p.id === id
        ? {
            ...p,
            favorite: !p.favorite,
          }
        : p
    );

    setPassengers(updated);

    localStorage.setItem(
      "passengers",
      JSON.stringify(updated)
    );
  };

  const filteredPassengers = passengers.filter((p) =>
    p.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">

        <h1 className="text-4xl font-bold">
          Passenger Vault
        </h1>

        <p className="mt-3 text-slate-400">
          Securely save passenger details for one-click railway bookings.
        </p>

        <div className="mt-10">
          <PassengerForm
            name={name}
            setName={setName}
            age={age}
            setAge={setAge}
            gender={gender}
            setGender={setGender}
            berth={berth}
            setBerth={setBerth}
            onSave={savePassenger}
            buttonText={
              editingId === null
                ? "Save Passenger"
                : "Update Passenger"
            }
          />
        </div>

        <div className="mt-12">

          <PassengerSearch
            search={search}
            setSearch={setSearch}
          />

          <h2 className="mb-6 text-3xl font-bold">
            Saved Passengers
          </h2>

          {filteredPassengers.length === 0 ? (
            <p className="text-slate-400">
              No passengers found.
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {filteredPassengers.map((passenger) => (
                <PassengerCard
                  key={passenger.id}
                  passenger={passenger}
                  onDelete={deletePassenger}
                  onEdit={editPassenger}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          )}

        </div>

      </div>
    </main>
  );
}