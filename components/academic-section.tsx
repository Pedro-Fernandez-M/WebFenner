"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Building2, Droplets, Car, Factory, GraduationCap, Users, Award, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export function AcademicSection() {
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

  const specialties = [
    {
      icon: Zap,
      title: "Electricidad",
      description: "Formación en instalaciones eléctricas, automatización y sistemas de control industrial.",
      color: "from-yellow-500 to-amber-500",
      slug: "electricidad",
    },
    {
      icon: Building2,
      title: "Construcción Mención Edificación",
      description: "Técnicas de construcción, lectura de planos, cálculo estructural y gestión de obras.",
      color: "from-orange-500 to-red-500",
      slug: "construccion",
    },
    {
      icon: Droplets,
      title: "Instalaciones Sanitarias",
      description: "Sistemas de agua potable, alcantarillado, gas y climatización en edificaciones.",
      color: "from-blue-500 to-cyan-500",
      slug: "instalaciones-sanitarias",
    },
    {
      icon: Car,
      title: "Mecánica Automotriz",
      description: "Diagnóstico, mantención y reparación de sistemas mecánicos y electrónicos vehiculares.",
      color: "from-gray-600 to-gray-800",
      slug: "mecanica-automotriz",
    },
    {
      icon: Factory,
      title: "Estructuras Metálicas",
      description: "Diseño, fabricación y montaje de estructuras metálicas para la construcción e industria.",
      color: "from-slate-500 to-zinc-600",
      slug: "estructuras-metalicas",
    },
  ]

  return (
    <section id="academico" ref={sectionRef} className="py-24 bg-[var(--color-neutral-100)]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4">
            Formación Técnico Profesional
          </h2>
          <p className="text-xl text-[var(--color-neutral-700)] max-w-3xl mx-auto text-pretty leading-relaxed">
            Educación media técnico-profesional de 1° a 4° medio, con elección de especialidad en 3° medio
          </p>
        </div>

        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon
            return (
              <Link key={index} href={`/especialidades/${specialty.slug}`}>
                <Card className="p-8 bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${specialty.color} flex items-center justify-center mb-6`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">{specialty.title}</h3>
                  <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">{specialty.description}</p>
                  <div className="flex items-center text-[var(--color-primary)] font-semibold">
                    Ver más <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* Características */}
        <div
          className={`mb-20 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="p-8 md:p-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white border-none">
            <h3 className="text-3xl font-bold mb-8 text-center">¿Por qué elegirnos?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Talleres Equipados</h4>
                <p className="text-neutral-200">Infraestructura moderna con herramientas y equipos industriales</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Título Técnico</h4>
                <p className="text-neutral-200">
                  Certificación de nivel medio reconocida por el Ministerio de Educación
                </p>
              </div>
              <div className="text-center">
                <GraduationCap className="w-12 h-12 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Práctica Profesional</h4>
                <p className="text-neutral-200">Convenios con empresas para experiencia laboral real</p>
              </div>
            </div>
          </Card>
        </div>

        <div
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="p-8 md:p-10 bg-gradient-to-br from-red-600 to-red-700 text-white border-none text-center">
            <Users className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4">¡Conoce nuestra comunidad educativa!</h3>
            <p className="text-lg text-red-50 mb-6 max-w-2xl mx-auto leading-relaxed">
              Descubre a nuestro equipo directivo, profesores, profesionales de apoyo y todo el personal que hace
              posible la formación de nuestros estudiantes
            </p>
            <Link href="/profesores">
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-red-50 text-lg px-8 py-6 h-auto font-bold shadow-lg hover:shadow-xl transition-all"
              >
                Ver Comunidad Educativa
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </section>
  )
}
