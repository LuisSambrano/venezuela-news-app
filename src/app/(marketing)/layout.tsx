import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="fixed inset-0 z-[-1] bg-gradient-to-b from-zinc-50 to-zinc-200 dark:from-zinc-950 dark:to-zinc-900" />
      <div className="fixed inset-0 z-[-1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
      <Header />
      <main className="pt-20"> {/* Added padding top instead of component */}
        {children}
      </main>
      <Footer />
    </>
  );
}
