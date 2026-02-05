import HeroSection from "@/components/home/HeroSection";
import ContextSection from "@/components/home/ContextSection";
import RegistryPreviewSection from "@/components/home/RegistryPreviewSection";
import MethodologySection from "@/components/home/MethodologySection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <HeroSection />
      <ContextSection />
      <RegistryPreviewSection />
      <MethodologySection />
      <CTASection />
    </main>
  );
}
