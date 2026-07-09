import { useRef, useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import SearchSection from "@/components/sections/SearchSection";
import TrainResults from "@/components/sections/TrainResults";
import Statistics from "@/components/sections/Statistics";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";

interface SearchData {
  from: string;
  to: string;
  date: string;
}

function App() {
  const [searchData, setSearchData] = useState<SearchData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleSearch = (data: SearchData) => {
  setIsLoading(true);

  setTimeout(() => {
    setSearchData(data);
    setIsLoading(false);

    setTimeout(() => {
      resultsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }, 1500);
};

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      <Navbar />
      <Hero />

      <SearchSection
  onSearch={handleSearch}
  isLoading={isLoading}
/>

      {isLoading && (
        <div className="py-20 text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent"></div>

          <p className="mt-6 text-lg text-cyan-400">
            Searching trains...
          </p>
        </div>
      )}

      {!isLoading && searchData && (
  <div ref={resultsRef}>
    <TrainResults
      from={searchData.from}
      to={searchData.to}
      date={searchData.date}
    />
  </div>
)}

      <Statistics />
      <HowItWorks />
      <Testimonials />
      <Features />
      <Footer />
    </div>
  );
}

export default App;