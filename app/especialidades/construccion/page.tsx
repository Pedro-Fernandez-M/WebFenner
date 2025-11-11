"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, BookOpen, Briefcase, Award, ArrowLeft, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function ConstruccionPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Link href="/#academico">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Volver a Especialidades
            </Button>
          </Link>

          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)]">
                  Construcción Mención Edificación
                </h1>
                <p className="text-xl text-[var(--color-neutral-700)] mt-2">Especialidad Técnico Profesional</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="lg:col-span-2 p-8">
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">Descripción de la Especialidad</h2>
              <p className="text-[var(--color-neutral-700)] leading-relaxed mb-6">
                La especialidad de Construcción Mención Edificación forma técnicos capacitados para participar en todas
                las etapas de un proyecto de construcción, desde la lectura e interpretación de planos hasta la
                ejecución y supervisión de obras. Nuestros estudiantes desarrollan competencias en albañilería, hormigón
                armado, terminaciones y gestión de proyectos constructivos.
              </p>
              <p className="text-[var(--color-neutral-700)] leading-relaxed">
                Durante su formación, los estudiantes aprenden técnicas modernas de construcción, cálculo de materiales,
                seguridad en obras y uso de tecnología aplicada a la construcción, preparándolos para desempeñarse en el
                dinámico sector de la construcción.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-orange-500 to-red-500 text-white">
              <Award className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Título que Otorga</h3>
              <p className="text-lg font-semibold">Técnico de Nivel Medio en Construcción Mención Edificación</p>
              <p className="mt-4 text-orange-50">Reconocido por el Ministerio de Educación</p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <BookOpen className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6">Áreas de Aprendizaje</h3>
              <ul className="space-y-3">
                {[
                  "Lectura e interpretación de planos arquitectónicos",
                  "Técnicas de albañilería y mampostería",
                  "Hormigón armado y estructuras",
                  "Cálculo de materiales y cubicaciones",
                  "Terminaciones de obra y revestimientos",
                  "Topografía básica aplicada",
                  "Seguridad en obras de construcción",
                  "Gestión y administración de proyectos",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--color-neutral-700)]">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8">
              <Briefcase className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6">Campo Laboral</h3>
              <ul className="space-y-3">
                {[
                  "Empresas constructoras",
                  "Obras de edificación habitacional",
                  "Construcción de edificios comerciales",
                  "Empresas de remodelación",
                  "Supervisión de obras",
                  "Maestro constructor independiente",
                  "Empresas inmobiliarias",
                  "Organismos públicos de infraestructura",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--color-neutral-700)]">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white">
            <h3 className="text-3xl font-bold mb-6 text-center">Infraestructura y Equipamiento</h3>
            <p className="text-lg text-center mb-8 max-w-3xl mx-auto leading-relaxed">
              Disponemos de talleres especializados y áreas de práctica donde los estudiantes pueden desarrollar
              proyectos reales de construcción bajo supervisión profesional.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2">Taller de Construcción</h4>
                <p className="text-neutral-200">Espacio equipado para prácticas de albañilería y hormigón</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2">Sala de Proyectos</h4>
                <p className="text-neutral-200">Computadores con software de diseño y planificación</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2">Herramientas Profesionales</h4>
                <p className="text-neutral-200">Equipos y herramientas de construcción especializadas</p>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
