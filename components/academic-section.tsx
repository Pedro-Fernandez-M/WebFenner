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
      surface: "from-yellow-100 via-amber-50 to-yellow-50",
      accent: "bg-yellow-500",
      tag: "Energía y control",
      slug: "electricidad",
    },
    {
      icon: Building2,
      title: "Construcción Mención Edificación",
      description: "Técnicas de construcción, lectura de planos, cálculo estructural y gestión de obras.",
      color: "from-orange-500 to-red-500",
      surface: "from-orange-100 via-orange-50 to-red-50",
      accent: "bg-orange-500",
      tag: "Obras y planos",
      slug: "construccion",
    },
    {
      icon: Droplets,
      title: "Instalaciones Sanitarias",
      description: "Sistemas de agua potable, alcantarillado, gas y climatización en edificaciones.",
      color: "from-blue-500 to-cyan-500",
      surface: "from-sky-100 via-cyan-50 to-blue-50",
      accent: "bg-blue-500",
      tag: "Redes técnicas",
      slug: "instalaciones-sanitarias",
    },
    {
      icon: Car,
      title: "Mecánica Automotriz",
      description: "Diagnóstico, mantención y reparación de sistemas mecánicos y electrónicos vehiculares.",
      color: "from-gray-600 to-gray-800",
      surface: "from-zinc-200 via-slate-100 to-zinc-50",
      accent: "bg-slate-700",
      tag: "Motores y diagnóstico",
      slug: "mecanica-automotriz",
    },
    {
      icon: Factory,
      title: "Estructuras Metálicas",
      description: "Diseño, fabricación y montaje de estructuras metálicas para la construcción e industria.",
      color: "from-slate-500 to-zinc-600",
      surface: "from-slate-200 via-slate-50 to-zinc-100",
      accent: "bg-slate-500",
      tag: "Fabricación industrial",
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
          className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5 mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon
            return (
              <Link key={index} href={`/especialidades/${specialty.slug}`} className="group h-full">
                <Card
                  className={`relative h-full overflow-hidden border border-white/70 bg-gradient-to-b ${specialty.surface} p-0 shadow-lg shadow-slate-200/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/60 cursor-pointer`}
                >
                  <div className={`h-1.5 w-full ${specialty.accent}`} />
                  <div className="flex h-full flex-col p-6">
                    <div className="mb-5 flex items-start justify-between gap-3">
                      <span className="rounded-full border border-black/5 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-neutral-700)]">
                        {specialty.tag}
                      </span>
                      <span className="text-sm font-semibold text-[var(--color-neutral-700)]">0{index + 1}</span>
                    </div>
                    <div
                      className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${specialty.color} shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="mb-4 text-2xl leading-tight font-bold text-[var(--color-primary)] xl:text-[1.65rem]">
                      {specialty.title}
                    </h3>
                    <p className="mb-6 flex-1 text-[var(--color-neutral-700)] leading-relaxed text-sm xl:text-base">
                      {specialty.description}
                    </p>
                    <div className="flex items-center justify-between border-t border-black/5 pt-4 text-[var(--color-primary)] font-semibold">
                      <span>Ver especialidad</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
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
