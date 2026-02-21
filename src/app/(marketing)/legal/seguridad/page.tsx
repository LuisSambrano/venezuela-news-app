import LegalContent from "@/components/legal/LegalContent";

export default function SeguridadPage() {
  return (
    <LegalContent 
      title="Seguridad"
      iconName="Lock"
      content={[
        "LibertadVNZL implementa medidas de seguridad estándar de la industria para proteger la integridad de nuestro sitio web y la información de nuestros usuarios.",
        "Utilizamos conexiones HTTPS cifradas y seguimos las mejores prácticas de desarrollo seguro para prevenir accesos no autorizados."
      ]}
    />
  );
}
