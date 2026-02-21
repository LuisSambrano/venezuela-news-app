import LegalContent from "@/components/legal/LegalContent";

export default function PrivacidadPage() {
  return (
    <LegalContent 
      title="Privacidad"
      iconName="ShieldCheck"
      content={[
        "LibertadVNZL respeta la privacidad de sus lectores. No compartimos información personal con terceros sin consentimiento expreso del usuario.",
        "Utilizamos cookies esenciales para el funcionamiento del sitio. Puedes consultar nuestra política de cookies para más detalles sobre qué datos se recopilan y cómo se utilizan."
      ]}
    />
  );
}
