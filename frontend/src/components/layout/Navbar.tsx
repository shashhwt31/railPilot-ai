import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-900/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="text-2xl font-bold text-white hover:text-cyan-400 transition"
        >
          🚆 RailPilot AI
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            Home
          </Link>

          <Link
            to="/vault"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            Passenger Vault
          </Link>

          <Link
            to="/tatkal"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            Tatkal Dashboard
          </Link>

          <Button asChild>
            <Link to="/vault">Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
