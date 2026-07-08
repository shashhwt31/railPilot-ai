export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/20 bg-slate-950 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            🚆 RailPilot AI
          </h2>

          <p className="mt-4 max-w-sm text-slate-400">
            AI-powered railway assistant that helps you discover smarter
            routes, compare trains and travel with confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Quick Links
          </h3>

          <ul className="space-y-2 text-slate-400">
            <li><a href="#" className="hover:text-cyan-400">Home</a></li>
            <li><a href="#" className="hover:text-cyan-400">Features</a></li>
            <li><a href="#" className="hover:text-cyan-400">Search</a></li>
            <li><a href="#" className="hover:text-cyan-400">Testimonials</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Connect
          </h3>

          <ul className="space-y-2 text-slate-400">
            <li>
              <a
                href="https://github.com/shashhwt31/railPilot-ai"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400"
              >
                GitHub Repository
              </a>
            </li>

            <li>Built with React + TypeScript</li>
            <li>Powered by AI</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
        © 2026 RailPilot AI. Built by Shashwat Singh Patel.
      </div>
    </footer>
  );
}