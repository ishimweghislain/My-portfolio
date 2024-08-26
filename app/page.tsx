
import Contact from "@/Components/main/Contact";
import Encryption from "@/Components/main/Encryption";
import Hero from "@/Components/main/Hero";
import Projects from "@/Components/main/Projects";
import Skills from "@/Components/main/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div >
      
        <Hero />
        
        <Skills />
        <Encryption />
        <Projects />
        <Contact />
        </div>
        
    </main>
  );
}
