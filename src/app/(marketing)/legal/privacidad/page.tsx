import LegalContent from "@/components/legal/LegalContent";

export default function PrivacidadPage() {
  return (
    <LegalContent 
      title="Privacidad"
      iconName="ShieldCheck"
      content={[
        "M&T Venezuela opera bajo una arquitectura de registro cero (No-Log). No almacenamos direcciones IP ni huellas digitales de navegación de nuestros usuarios para garantizar el anonimato absoluto.",
        "Cualquier reporte enviado a través de nuestros canales de denuncia es cifrado de extremo a extremo mediante el estándar AES-256 antes de ser procesado por nuestro nodo central."
      ]}
    />
  );
}
