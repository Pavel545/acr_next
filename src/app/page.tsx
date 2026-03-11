import Advantages from "@/components/sections/main/advantages/advantages";
import Cases from "@/components/sections/main/cases/cases";
import HeroMain from "@/components/sections/main/hero/hero";
import Services from "@/components/sections/main/services/services";
import Technologies from "@/components/sections/main/technologies/technologies";

export default function Home() {
  return (
    <main>
      <HeroMain />
      <Services />
      <Cases />
      <Advantages />
      <Technologies />
      
    </main>
  );
}
