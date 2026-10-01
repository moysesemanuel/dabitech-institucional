import { Hero } from "@/components/sections/hero";
import { Capabilities } from "@/components/sections/capabilities";
import { Process } from "@/components/sections/process";
import { SolutionsCatalog } from "@/components/sections/solutions-catalog";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <SolutionsCatalog />
      <Capabilities />
      <Process />
      <Contact />
    </>
  );
}
