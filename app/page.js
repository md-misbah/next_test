import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Certificates from "@/components/Certificates";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
      <Footer/>
      


    </main>
  )
}
