"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Target, Eye, Heart, Lightbulb, Quote } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function NosotrosPage() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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
    <div className="min-h-screen bg-[var(--color-background)]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Sobre Nosotros</h1>
            <p className="text-xl md:text-2xl text-white/90 text-pretty leading-relaxed">
              Conoce la historia, misión y valores que nos definen como institución de excelencia técnico-profesional
            </p>
          </div>
        </div>
      </section>

      {/* Historia Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="p-8 md:p-12 shadow-xl border-none">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-6">Nuestra Historia</h2>
                  <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
                    El Liceo Bicentenario Industrial Ingeniero Ricardo Fenner Ruedi de La Unión es una institución
                    emblemática que ha formado generaciones de técnicos profesionales comprometidos con el desarrollo
                    industrial de la región.
                  </p>
                  <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
                    Como parte de la Red SNA EDUCA, mantenemos un compromiso permanente con la calidad educativa, la
                    innovación tecnológica y la formación integral de nuestros estudiantes.
                  </p>
                  <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
                    Nuestro nombre honra al ingeniero Ricardo Fenner Ruedi, destacado profesional que contribuyó
                    significativamente al desarrollo industrial de Chile.
                  </p>
                  <p className="text-[var(--color-neutral-700)] leading-relaxed">
                    A lo largo de nuestra trayectoria, hemos mantenido un vínculo estrecho con el sector productivo,
                    permitiendo que nuestros estudiantes desarrollen competencias técnicas de alto nivel y se inserten
                    exitosamente en el mundo laboral.
                  </p>
                </div>
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/placeholder.svg?height=500&width=600"
                    alt="Edificio del Liceo Industrial"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Misión, Visión, Valores, Lema */}
      <section ref={sectionRef} className="py-20 bg-[var(--color-background)]">
        <div className="container mx-auto px-4">
          <div
            className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto transition-all duration-1000 ${
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
              <p className="leading-relaxed text-xl font-semibold">"Forjando el futuro con técnica y valores"</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Palabras del Director */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4">
                Palabras de Nuestro Director
              </h2>
              <div className="w-24 h-1 bg-[var(--color-accent)] mx-auto rounded-full" />
            </div>

            <Card className="p-8 md:p-12 shadow-xl border-none bg-gradient-to-br from-[var(--color-neutral-50)] to-white">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-[var(--color-primary)]">
                    <img
                      src="/placeholder.svg?height=200&width=200"
                      alt="Director del Liceo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-xl font-bold text-[var(--color-primary)]">Nombre del Director</h3>
                    <p className="text-[var(--color-neutral-600)]">Director</p>
                  </div>
                </div>

                <div className="flex-1">
                  <Quote className="w-12 h-12 text-[var(--color-accent)] mb-4" />
                  <div className="space-y-4 text-[var(--color-neutral-700)] leading-relaxed">
                    <p>
                      Estimada comunidad educativa, es un honor para mí dirigir el Liceo Bicentenario Industrial
                      Ingeniero Ricardo Fenner Ruedi, una institución que ha sido pilar fundamental en la formación
                      técnico-profesional de nuestra región.
                    </p>
                    <p>
                      Nuestro compromiso es brindar una educación de excelencia que prepare a nuestros estudiantes no
                      solo con competencias técnicas de primer nivel, sino también con valores sólidos que les permitan
                      ser ciudadanos íntegros y profesionales comprometidos con el desarrollo de nuestra sociedad.
                    </p>
                    <p>
                      Como parte de la Red SNA EDUCA, trabajamos constantemente en la innovación de nuestras prácticas
                      pedagógicas, la actualización de nuestros talleres y laboratorios, y el fortalecimiento de
                      nuestros vínculos con el sector productivo.
                    </p>
                    <p>
                      Invito a toda la comunidad a ser parte activa de este proyecto educativo, donde cada día forjamos
                      el futuro de nuestros jóvenes con técnica, valores y excelencia.
                    </p>
                    <p className="font-semibold text-[var(--color-primary)] mt-6">
                      Con afecto y compromiso,
                      <br />
                      Director del Liceo Bicentenario Industrial Ingeniero Ricardo Fenner Ruedi
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
