"use client"

import { Card } from "@/components/ui/card"
import { Target, Eye, Heart, Lightbulb } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { withBasePath } from "@/lib/asset-path"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="nosotros" ref={sectionRef} className="py-24 bg-[var(--color-background)]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4">Sobre Nosotros</h2>
          <p className="text-xl text-[var(--color-neutral-700)] max-w-3xl mx-auto text-pretty leading-relaxed">
            Somos un Liceo Bicentenario de excelencia, parte de la Red SNA EDUCA, dedicado a formar técnicos
            profesionales con sólidos valores y competencias para el mundo industrial
          </p>
        </div>

        <div
          className={`mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="p-8 md:p-12 bg-white shadow-lg border-none">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-[var(--color-primary)] mb-6">Nuestra Historia</h3>
                <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
                  El Liceo Bicentenario Industrial Ingeniero Ricardo Fenner Ruedi de La Unión es una institución
                  emblemática que ha formado generaciones de técnicos profesionales comprometidos con el desarrollo
                  industrial de la región.
                </p>
                <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
                  Como parte de la Red SNA EDUCA, mantenemos un compromiso permanente con la calidad educativa, la
                  innovación tecnológica y la formación integral de nuestros estudiantes.
                </p>
                <p className="text-[var(--color-neutral-700)] leading-relaxed">
                  Nuestro nombre honra al ingeniero Ricardo Fenner Ruedi, destacado profesional que contribuyó
                  significativamente al desarrollo industrial de Chile.
                </p>
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden bg-[var(--color-neutral-200)]">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                >
                  <source src={withBasePath("/Videos/IMG_5931.webm")} type="video/webm" />
                  Tu navegador no puede reproducir este video.
                  <a href={withBasePath("/Videos/IMG_5931.webm")}>Descargar video</a>
                </video>
              </div>
            </div>
          </Card>
        </div>

        <div
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="p-8 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white border-none hover:scale-105 transition-transform duration-300">
            <Target className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Misión</h3>
            <p className="leading-relaxed">
              Formar técnicos profesionales de excelencia con competencias industriales, valores sólidos y compromiso
              con el desarrollo sustentable de nuestra región.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-light)] text-white border-none hover:scale-105 transition-transform duration-300">
            <Eye className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Visión</h3>
            <p className="leading-relaxed">
              Ser reconocidos como el liceo técnico industrial líder en formación de calidad, innovación tecnológica y
              vinculación con el sector productivo.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-light)] text-white border-none hover:scale-105 transition-transform duration-300">
            <Heart className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Valores</h3>
            <p className="leading-relaxed">
              Responsabilidad, trabajo en equipo, innovación, respeto, perseverancia y compromiso con la excelencia
              técnica.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-[var(--color-highlight-dark)] to-[var(--color-highlight)] text-white border-none hover:scale-105 transition-transform duration-300">
            <Lightbulb className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Lema</h3>
            <p className="leading-relaxed text-xl font-semibold">"Más y mejores oportunidades para la vida"</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
