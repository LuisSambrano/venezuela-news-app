import ActOne from "@/components/home/Act1_Hero";
import ActTwo from "@/components/home/Act2_Context";
import ActThree from "@/components/home/Act3_Prisoners";
import ActFour from "@/components/home/Act4_Method";
import ActFive from "@/components/home/Act5_CTA";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* 
        The background is handled by layout.tsx (Fixed Gradient).
        Here we just sequence the 5 Acts.
      */}
      
      {/* 1. LA REALIDAD */}
      <ActOne />

      {/* 2. EL SILENCIO */}
      <ActTwo />

      {/* 3. LOS OLVIDADOS */}
      <ActThree />

      {/* 4. LA METODOLOGÍA */}
      <ActFour />

      {/* 5. LA ACCIÓN */}
      <ActFive />
    </main>
  );
}
