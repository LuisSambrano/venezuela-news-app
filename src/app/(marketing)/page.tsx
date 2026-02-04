import OracleHero from "@/components/institucional/OracleHero";
import TheProblem from "@/components/institucional/TheProblem";
import SectionThree from "@/components/institucional/SectionThree";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground selection:bg-electric-blue selection:text-black">
      {/* ACT 1: THE IMPACT */}
      <OracleHero />

      {/* ACT 2: THE PAIN */}
      <TheProblem />

      {/* ACT 3: THE INTELLIGENCE SHOWROOM */}
      <SectionThree />
    </main>
  );
}
