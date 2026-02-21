export default function ActFour() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-32 px-6 snap-center">
      <div className="max-w-3xl mx-auto text-center space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Verificación</h2>
                <p className="text-zinc-500 leading-relaxed">
                    Doble confirmación de cada reporte. Geolocalización de incidentes y validación cruzada de testimonios.
                </p>
            </div>
            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Seguridad Técnica</h2>
                <p className="text-zinc-500 leading-relaxed">
                    Infraestructura descentralizada. Tu navegación es anónima. Nuestra base de datos está replicada en múltiples jurisdicciones.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
