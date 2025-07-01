import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <div className="h-12 sm:h-20 bg-[#f9f6f1]" />

      <About/>

      
      {/* Spacer before the black line */}
      <div className="h-12 sm:h-16" />

      {/* Black horizontal line (90% width, centered) */}
      <div className="flex justify-center">
        <div className="w-[90%] h-px bg-black" />
      </div>

      {/* Optional spacer after line */}
      <div className="h-8 sm:h-18" />

      <Services />

      {/* Optional spacer after services section */}

    </main>
  );
}

