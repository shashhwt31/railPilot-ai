import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import SearchSection from "@/components/sections/SearchSection";
import Stats from "@/components/sections/Stats";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      <Navbar />
      <Hero />
      <SearchSection />
      <Features />
      <Stats />
    </div>
  );
}

export default App;