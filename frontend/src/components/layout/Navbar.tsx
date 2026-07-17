import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition ${
      isActive
        ? "text-cyan-400 font-semibold"
        : "text-slate-300 hover:text-cyan-400"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <NavLink
            to="/"
            className="text-2xl font-bold text-white transition hover:text-cyan-400"
          >
            🚆 RailPilot AI
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
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

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-slate-800 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <NavLink
                to="/"
                end
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>

              <NavLink
                to="/vault"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                Passenger Vault
              </NavLink>

              <NavLink
                to="/tatkal"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                Tatkal Dashboard
              </NavLink>

              <NavLink
                to="/routes"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                Route Planner
              </NavLink>

              <Button asChild className="mt-2">
                <NavLink
                  to="/vault"
                  onClick={() => setMenuOpen(false)}
                >
                  Get Started
                </NavLink>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}