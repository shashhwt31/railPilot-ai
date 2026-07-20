import { useNavigate } from "react-router-dom";

interface BookingProgressProps {
  currentStep: number;
}

const steps = [
  "Passenger",
  "Journey",
  "Train",
  "Review",
  "Confirm",
];

const routes = [
  "/vault",
  "/tatkal",
  "/tatkal",
  "/review",
  "/confirmation",
];

export default function BookingProgress({
  currentStep,
}: BookingProgressProps) {
  const navigate = useNavigate();

  return (
    <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-cyan-400">
        Booking Progress
      </h2>

      <div className="flex flex-wrap items-center justify-between gap-3">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const completed = stepNumber < currentStep;
          const active = stepNumber === currentStep;
          const clickable = stepNumber <= currentStep;

          return (
            <div
              key={step}
              className="flex items-center gap-3"
            >
              <button
                type="button"
                onClick={() => clickable && navigate(routes[index])}
                disabled={!clickable}
                className={`flex items-center gap-3 transition ${
                  clickable
                    ? "cursor-pointer hover:scale-105"
                    : "cursor-not-allowed opacity-60"
                }`}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-bold ${
                    completed
                      ? "bg-green-500 text-black"
                      : active
                      ? "bg-cyan-500 text-black"
                      : "bg-slate-700 text-white"
                  }`}
                >
                  {completed ? "✓" : stepNumber}
                </div>

                <span>{step}</span>
              </button>

              {index !== steps.length - 1 && (
                <div
                  className={`h-1 w-10 rounded ${
                    completed ? "bg-green-500" : "bg-slate-700"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}