import LegalContent from "@/components/legal/LegalContent";

export default function SeguridadPage() {
  return (
    <LegalContent 
      title="Seguridad"
      iconName="Lock"
      content={[
        "Nuestra infraestructura está protegida por múltiples capas de firewalls y balanceadores de carga redundantes para asegurar la disponibilidad del archivo frente a ataques externos.",
        "Toda la información recolectada se distribuye en nodos internacionales para garantizar su inmutabilidad frente a intentos de censura o borrado remoto."
      ]}
    />
  );
}
