import { Button } from "@/components/ui/button";

interface Train {
  id: number;
  name: string;
  fare: number;
  availability: number;
  waitingList: number;
  duration: number;
  score: number;
}

interface Props {
  train: Train | null;
  open: boolean;
  onClose: () => void;
}

export default function TrainDetailsModal({
  train,
  open,
  onClose,
}: Props) {
  if (!open || !train) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-slate-900 p-6 shadow-2xl">
        <h2 className="text-3xl font-bold text-cyan-400">
          {train.name}
        </h2>

        <div className="mt-6 space-y-3 text-slate-300">
          <p><strong>Train No:</strong> {12000 + train.id}</p>
          <p><strong>Departure:</strong> 06:30 AM</p>
          <p><strong>Arrival:</strong> 02:15 PM</p>
          <p>
            <strong>Duration:</strong>{" "}
            {Math.floor(train.duration / 60)}h {train.duration % 60}m
          </p>
          <p><strong>Fare:</strong> ₹{train.fare}</p>
          <p><strong>Seats Available:</strong> {train.availability}</p>
          <p><strong>Waiting List:</strong> WL {train.waitingList}</p>
          <p><strong>Available Classes:</strong> SL • 3A • 2A</p>
        </div>

        <div className="mt-6 rounded-lg bg-slate-800 p-4 text-cyan-400">
          AI Recommendation Score: {train.score.toFixed(1)}
        </div>

        <Button
          className="mt-6 w-full"
          onClick={onClose}
        >
          Close
        </Button>
      </div>
    </div>
  );
}