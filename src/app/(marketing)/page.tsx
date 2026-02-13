import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";
import ContextSection from "@/components/home/ContextSection";

const RegistryPreviewSection = dynamic(() => import("@/components/home/RegistryPreviewSection"), {
  loading: () => <div className="min-h-screen animate-pulse bg-zinc-100 dark:bg-zinc-900" />,
});
const MethodologySection = dynamic(() => import("@/components/home/MethodologySection"), {
  loading: () => <div className="min-h-screen animate-pulse bg-zinc-100 dark:bg-zinc-900" />,
});
const CTASection = dynamic(() => import("@/components/home/CTASection"), {
  loading: () => <div className="min-h-screen animate-pulse bg-zinc-100 dark:bg-zinc-900" />,
});

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
