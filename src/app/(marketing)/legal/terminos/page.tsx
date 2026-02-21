import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: 'Términos de Servicio | LibertadVNZL',
  description: 'Términos y condiciones de uso del portal LibertadVNZL.',
};

export default function TerminosPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-linear-to-b from-blue-900/10 to-transparent pointer-events-none" />
      <div className="absolute inset-0 noise pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 glass-panel p-8 md:p-16 rounded-[48px]">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-background/50 hover:bg-background text-sm font-bold text-muted-foreground hover:text-foreground transition-all mb-12"
        >
          <ArrowLeft size={16} />
          Volver al Inicio
        </Link>

        <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-foreground">
          Términos de Servicio
        </h1>
        <p className="text-muted-foreground text-lg mb-12 uppercase tracking-widest font-bold text-[10px]">
          Última actualización: Marzo 2026
        </p>

        <div className="prose-custom max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground">
          <h2>1. Aceptación de los Términos</h2>
          <p>
            Al acceder y utilizar el sitio web LibertadVNZL, usted acepta estar sujeto a estos Términos de Servicio y a todas las leyes y regulaciones aplicables. Si no está de acuerdo con alguno de estos términos, tiene prohibido utilizar o acceder a este sitio.
          </p>

          <h2>2. Propiedad Intelectual</h2>
          <p>
            Todo el contenido periodístico, artículos, reportajes, elementos gráficos, logotipos, clips de audio e información alojada en LibertadVNZL son propiedad exclusiva del medio o están debidamente licenciados para nuestro uso. Está estrictamente prohibida la reproducción, distribución o modificación no autorizada, total o parcial, de nuestros contenidos sin la citación adecuada.
          </p>

          <h2>3. Uso de Contenido y Citas</h2>
          <p>
            Fomentamos la difusión de la información siempre y cuando se respete el trabajo periodístico origial. Puede citar o enlazar nuestros artículos siempre que incluya un crédito claro a &quot;LibertadVNZL&quot; y un enlace (link) hacia el contenido original de nuestro sitio.
          </p>

          <h2>4. Responsabilidad del Usuario</h2>
          <p>
            Como usuario, usted se compromete a no utilizar nuestro sitio web con fines ilícitos o malintencionados. Nos reservamos el derecho de bloquear el acceso a usuarios que intenten vulnerar la seguridad del portal, inyectar código malicioso o realizar ataques de denegación de servicio (DDoS).
          </p>

          <h2>5. Modificaciones a los Términos</h2>
          <p>
            LibertadVNZL se reserva el derecho de revisar y formular cambios o actualizaciones a estos Términos de Servicio en cualquier momento, publicando la nueva versión en esta página.
          </p>

          <h2>6. Ley Aplicable</h2>
          <p>
            Estos términos se rigen e interpretan de acuerdo con las leyes internacionales en materia de libertad de expresión editorial y periodística.
          </p>

          <hr className="my-12 border-border/50" />
          <p className="text-sm">
            Para dudas sobre nuestros Términos de Servicio, contáctenos en <a href="mailto:legal@venezuelanews.app" className="text-blue-500 font-bold hover:underline">legal@venezuelanews.app</a>
          </p>
        </div>
      </div>
    </div>
  );
}
