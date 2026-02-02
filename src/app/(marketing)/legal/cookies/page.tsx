import LegalContent from "@/components/legal/LegalContent";

export default function CookiesPage() {
  return (
    <LegalContent 
      title="Cookies"
      iconName="Terminal"
      content={[
        "Este sitio web emplea únicamente cookies técnicas esenciales para mantener el estado de la sesión (como la preferencia de modo oscuro) y asegurar la integridad de la navegación.",
        "No utilizamos trackers publicitarios ni servicios de seguimiento de terceros que comprometan la privacidad del usuario bajo ninguna circunstancia."
      ]}
    />
  );
}
