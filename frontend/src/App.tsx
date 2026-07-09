import { useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "@/components/layout/Navbar";
import Home from "@/pages/Home";
import PassengerVault from "@/pages/PassengerVault";

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
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <div ref={resultsRef}>
                <Home
                  isLoading={isLoading}
                  searchData={searchData}
                  onSearch={handleSearch}
                />
              </div>
            }
          />

          <Route
            path="/vault"
            element={<PassengerVault />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;