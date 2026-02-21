export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6 relative snap-center">
      <div className="max-w-4xl mx-auto text-center space-y-12 z-10">

        {/* Headline */}
        <h1
            className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 leading-[0.9] animate-enter"
        >
            M&T Venezuela.
        </h1>

        {/* Subtext */}
        <p
            className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto font-light leading-relaxed animate-enter [animation-delay:200ms]"
        >
            Periodismo independiente. <br/>
            Noticias verificadas sobre Venezuela.
        </p>

      </div>
    </section>
  );
}
