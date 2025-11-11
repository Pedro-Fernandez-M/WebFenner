"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Wrench, Cog, Zap, Clock, Mail, Phone } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-dark)] to-[var(--color-neutral-900)] pt-20"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-highlight)] rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-secondary)] rounded-full blur-3xl"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-[var(--color-accent)] rounded-full blur-3xl"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div
            className={`mb-8 flex justify-center transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <Image
              src="/logo-liceo.png"
              alt="Logo Liceo Bicentenario Industrial Ingeniero Ricardo Fenner Ruedi"
              width={180}
              height={180}
              className="object-contain drop-shadow-2xl"
            />
          </div>

          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 text-balance">
              Liceo Bicentenario Industrial
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-highlight)] mb-6 text-balance">
              Ingeniero Ricardo Fenner Ruedi
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-2 font-semibold">Red SNA EDUCA • La Unión</p>
            <p className="text-xl md:text-2xl text-neutral-200 mb-8 text-pretty leading-relaxed max-w-3xl mx-auto">
              Formando técnicos profesionales con excelencia, innovación y compromiso con el desarrollo industrial de
              nuestra región
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                onClick={() => scrollToSection("nosotros")}
                className="bg-[var(--color-highlight)] hover:bg-[var(--color-highlight-dark)] text-[var(--color-neutral-900)] text-lg px-8 py-6 font-bold"
              >
                Conocer Más
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contacto")}
                className="border-2 border-white text-white hover:bg-white hover:text-[var(--color-primary)] text-lg px-8 py-6"
              >
                Contáctanos
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-16 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="w-6 h-6 text-[var(--color-highlight)]" />
                <h3 className="text-xl font-bold text-white">Horario de Atención</h3>
              </div>
              <div className="space-y-2 text-white/90 mb-4">
                <p className="text-lg">
                  <span className="font-semibold">Lunes a Jueves:</span> 8:20 AM a 6:25 PM
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Viernes:</span> 8:20 AM a 1:30 PM
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Sábados y Domingos:</span> Cerrados
                </p>
              </div>
              <div className="border-t border-white/20 pt-4 space-y-2">
                <div className="flex items-center justify-center gap-2 text-white/90">
                  <Mail className="w-5 h-5 text-[var(--color-highlight)]" />
                  <a href="mailto:i.launion.secretaria@snaeduca.cl" className="hover:text-white transition-colors">
                    i.launion.secretaria@snaeduca.cl
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2 text-white/90">
                  <Phone className="w-5 h-5 text-[var(--color-highlight)]" />
                  <a href="tel:+56642570409" className="hover:text-white transition-colors">
                    +56 64 2 5704099
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Wrench className="w-12 h-12 text-[var(--color-highlight)] mb-4 mx-auto" />
              <h3 className="text-3xl font-bold text-white mb-2">Técnico</h3>
              <p className="text-neutral-200">Profesional</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Cog className="w-12 h-12 text-[var(--color-secondary-light)] mb-4 mx-auto" />
              <h3 className="text-3xl font-bold text-white mb-2">Industrial</h3>
              <p className="text-neutral-200">Innovación y Tecnología</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Zap className="w-12 h-12 text-[var(--color-highlight)] mb-4 mx-auto" />
              <h3 className="text-3xl font-bold text-white mb-2">Bicentenario</h3>
              <p className="text-neutral-200">Excelencia Educativa</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="var(--color-neutral-50)"
          />
        </svg>
      </div>
    </section>
  )
}
