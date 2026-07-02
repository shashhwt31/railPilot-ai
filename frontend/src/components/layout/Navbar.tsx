import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-900">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold text-white">
          🚆 RailPilot AI
        </h1>

        <div className="flex items-center gap-6">
          <a href="#" className="text-slate-300 hover:text-white">
            Features
          </a>

          <a href="#" className="text-slate-300 hover:text-white">
            About
          </a>

          <Button>Get Started</Button>
        </div>
      </div>
    </nav>
  );
}