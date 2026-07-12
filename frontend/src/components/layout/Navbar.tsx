import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition ${
      isActive
        ? "text-cyan-400 font-semibold"
        : "text-slate-300 hover:text-cyan-400"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <NavLink
          to="/"
          className="text-2xl font-bold text-white transition hover:text-cyan-400"
        >
          🚆 RailPilot AI
        </NavLink>

        <div className="flex items-center gap-6">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/vault" className={navLinkClass}>
            Passenger Vault
          </NavLink>

          <NavLink to="/tatkal" className={navLinkClass}>
            Tatkal Dashboard
          </NavLink>

          <NavLink to="/routes" className={navLinkClass}>
            Route Planner
          </NavLink>

          <Button asChild>
            <NavLink to="/vault">Get Started</NavLink>
          </Button>
        </div>
      </div>
    </nav>
  );
}