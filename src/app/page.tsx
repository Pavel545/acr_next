import Blog from "@/components/sections/blog/Blog";
import Advantages from "@/components/sections/main/advantages/advantages";
import Cases from "@/components/sections/main/cases/cases";
import Cooperation from "@/components/sections/main/cooperation/Сooperation";
import HeroMain from "@/components/sections/main/hero/hero";
import ServicesG from "@/components/sections/main/services";
import Technologies from "@/components/sections/main/technologies/technologies";


export default function Home() {
  return (
    <main>
      <HeroMain />
      <Cooperation />
      <ServicesG />
      <Cases />
      <Advantages />
      <Technologies />
      <Blog/>
    </main>
  );
}
