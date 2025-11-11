import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { AcademicSection } from "@/components/academic-section"
import { NewsSection } from "@/components/news-section"
import { ContactSection } from "@/components/contact-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen scroll-smooth">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <AcademicSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
