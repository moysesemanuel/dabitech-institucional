import { Hero } from "@/components/sections/hero";
import { Capabilities } from "@/components/sections/capabilities";
import { Process } from "@/components/sections/process";
import { Proof } from "@/components/sections/proof";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Capabilities />
      <Process />
      <Proof />
      <Contact />
    </>
  );
}
