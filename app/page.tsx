import Navbar from "@/components/portfolio/Navbar"
import Hero from "@/components/portfolio/Hero"
import WhoAmI from "@/components/portfolio/WhoAmI"
import BuildMethod from "@/components/portfolio/BuildMethod"
import Manifesto from "@/components/portfolio/Manifesto"
import Projects from "@/components/portfolio/Projects"
import Skills from "@/components/portfolio/Skills"
import PMSkills from "@/components/portfolio/PMSkills"
import Experience from "@/components/portfolio/Experience"
import Contact from "@/components/portfolio/Contact"
import Footer from "@/components/portfolio/Footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhoAmI />
      <BuildMethod />
      <Manifesto />
      <Projects />
      <PMSkills />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
