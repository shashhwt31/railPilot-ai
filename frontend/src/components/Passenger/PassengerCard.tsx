import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useBooking } from "@/context/BookingContext";

export interface Passenger {
  id: number;
  name: string;
  age: string;
  gender: string;
  berth: string;
  favorite: boolean;
}

interface PassengerCardProps {
  passenger: Passenger;
  onDelete: (id: number) => void;
  onToggleFavorite: (id: number) => void;
  onEdit: (passenger: Passenger) => void;
}


export default function PassengerCard({
  passenger,
  onDelete,
  onToggleFavorite,
  onEdit,
}: PassengerCardProps) {
  const navigate = useNavigate();

const { setSelectedPassenger } = useBooking();
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-cyan-400">
          {passenger.name}
        </h3>

        {passenger.favorite && (
          <span className="text-2xl">
            ⭐
          </span>
        )}
      </div>

      <div className="mt-4 space-y-2">
        <p>
          <strong>Age:</strong> {passenger.age}
        </p>

        <p>
          <strong>Gender:</strong> {passenger.gender}
        </p>

        <p>
          <strong>Preferred Berth:</strong> {passenger.berth}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button
          variant="secondary"
          onClick={() => onEdit(passenger)}
        >
          ✏️ Edit
        </Button>

        <Button
  variant="outline"
  className="text-slate-900 hover:text-white"
  onClick={() => onToggleFavorite(passenger.id)}
>
  {passenger.favorite ? "★ Unfavorite" : "☆ Favorite"}
</Button>

<Button
  className="bg-cyan-600 hover:bg-cyan-700"
  onClick={() => {
    setSelectedPassenger(passenger);
    navigate("/tatkal");
  }}
>
  🚆 Use for Booking
</Button>

        <Button
          variant="destructive"
          onClick={() => onDelete(passenger.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}