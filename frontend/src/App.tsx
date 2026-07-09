import { useState } from "react";

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

  const handleSearch = (data: SearchData) => {
    setSearchData(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      <Navbar />
      <Hero />

      <SearchSection onSearch={handleSearch} />

      {searchData && (
        <TrainResults
          from={searchData.from}
          to={searchData.to}
          date={searchData.date}
        />
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