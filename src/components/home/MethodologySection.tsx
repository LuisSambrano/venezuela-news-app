export default function MethodologySection() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-32 px-6 snap-center">
      <div className="max-w-3xl mx-auto text-center space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Verificación</h2>
                <p className="text-zinc-500 leading-relaxed">
                    Cada noticia pasa por un proceso de doble confirmación editorial. Cruzamos fuentes oficiales, testimonios directos y registros públicos.
                </p>
            </div>
            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Independencia</h2>
                <p className="text-zinc-500 leading-relaxed">
                    M&T Venezuela opera sin afiliación política ni financiamiento gubernamental. Nuestra única agenda es informar con precisión.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
