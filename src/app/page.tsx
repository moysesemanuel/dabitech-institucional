import { Hero } from "@/components/sections/hero";
import { Capabilities } from "@/components/sections/capabilities";
import { Process } from "@/components/sections/process";
import { SolutionsCatalog } from "@/components/sections/solutions-catalog";
import { LearnMore } from "@/components/sections/learn-more";

export default function Home() {
  return (
    <>
      <Hero />
      <SolutionsCatalog />
      <Capabilities />
      <Process />
      <LearnMore />
    </>
  );
}
