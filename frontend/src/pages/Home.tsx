import Hero from "@/components/sections/Hero";
import SearchSection from "@/components/sections/SearchSection";
import TrainResults from "@/components/sections/TrainResults";
import Statistics from "@/components/sections/Statistics";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";

interface HomeProps {
  isLoading: boolean;
  searchData: {
    from: string;
    to: string;
    date: string;
  } | null;
  onSearch: (data: {
    from: string;
    to: string;
    date: string;
  }) => void;
}

export default function Home({
  isLoading,
  searchData,
  onSearch,
}: HomeProps) {
  return (
    <>
      <Hero />

      <SearchSection
        isLoading={isLoading}
        onSearch={onSearch}
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
    </>
  );
}