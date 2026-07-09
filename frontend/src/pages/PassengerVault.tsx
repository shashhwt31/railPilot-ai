import { Button } from "@/components/ui/button";

export default function PassengerVault() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl">

        <h1 className="text-4xl font-bold">
          Passenger Vault
        </h1>

        <p className="mt-3 text-slate-400">
          Securely save passenger details for one-click railway bookings.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-8">

          <div className="grid gap-6 md:grid-cols-2">

            <input
              placeholder="Full Name"
              className="rounded-lg border border-slate-700 bg-slate-950 p-3"
            />

            <input
              placeholder="Age"
              type="number"
              className="rounded-lg border border-slate-700 bg-slate-950 p-3"
            />

            <select className="rounded-lg border border-slate-700 bg-slate-950 p-3">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <select className="rounded-lg border border-slate-700 bg-slate-950 p-3">
              <option>Lower Berth</option>
              <option>Middle Berth</option>
              <option>Upper Berth</option>
              <option>Side Lower</option>
              <option>Side Upper</option>
              <option>No Preference</option>
            </select>

          </div>

          <Button className="mt-8">
            Save Passenger
          </Button>

        </div>

      </div>
    </main>
  );
}