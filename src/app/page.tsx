import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Rates from "@/components/Rates";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Header />

      <Hero />

      <div className="h-12 sm:h-18 bg-[#f9f6f1]" />
      <div className="sm:mb-20 mb-10"></div>

      <About />

      <div className="h-5 sm:h-16" />

      <div className="flex justify-center">
        <div className="w-[90%] h-px bg-black" />
      </div>

      <div className="h-10 sm:h-15" />

      <Services />

      <Rates />

      <div className="h-12 sm:h-16" />

      <div className="flex justify-center">
        <div className="w-[90%] h-px bg-black" />
      </div>

      <div className=" sm:h-8" />

      <FAQ />

      <div className="h-5 sm:h-8" />

      <Contact />

      <div className="h-15 sm:h-12" />

      <QuoteForm />

      <Footer />
    </main>
  );
}
