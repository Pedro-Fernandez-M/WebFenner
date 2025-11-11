"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Car, BookOpen, Briefcase, Award, ArrowLeft, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function MecanicaAutomotrizPage() {
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
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                <Car className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)]">Mecánica Automotriz</h1>
                <p className="text-xl text-[var(--color-neutral-700)] mt-2">Especialidad Técnico Profesional</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="lg:col-span-2 p-8">
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">Descripción de la Especialidad</h2>
              <p className="text-[var(--color-neutral-700)] leading-relaxed mb-6">
                La especialidad de Mecánica Automotriz forma técnicos capacitados para diagnosticar, mantener y reparar
                sistemas mecánicos y electrónicos de vehículos livianos y pesados. Nuestros estudiantes desarrollan
                competencias en motores, sistemas de transmisión, frenos, suspensión, electricidad automotriz y
                diagnóstico computarizado.
              </p>
              <p className="text-[var(--color-neutral-700)] leading-relaxed">
                Durante su formación, los estudiantes trabajan con vehículos reales y tecnología de diagnóstico moderna,
                aprendiendo tanto mecánica tradicional como sistemas electrónicos avanzados, preparándolos para el
                dinámico sector automotriz actual.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-gray-600 to-gray-800 text-white">
              <Award className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Título que Otorga</h3>
              <p className="text-lg font-semibold">Técnico de Nivel Medio en Mecánica Automotriz</p>
              <p className="mt-4 text-gray-200">Reconocido por el Ministerio de Educación</p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <BookOpen className="w-12 h-12 text-gray-700 mb-4" />
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6">Áreas de Aprendizaje</h3>
              <ul className="space-y-3">
                {[
                  "Motores de combustión interna bencineros y diésel",
                  "Sistemas de transmisión manual y automática",
                  "Sistemas de frenos y suspensión",
                  "Electricidad y electrónica automotriz",
                  "Diagnóstico computarizado con scanner",
                  "Sistemas de inyección electrónica",
                  "Aire acondicionado automotriz",
                  "Mantención preventiva y correctiva",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--color-neutral-700)]">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8">
              <Briefcase className="w-12 h-12 text-gray-700 mb-4" />
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6">Campo Laboral</h3>
              <ul className="space-y-3">
                {[
                  "Talleres mecánicos automotrices",
                  "Concesionarias de vehículos",
                  "Empresas de transporte",
                  "Servicios técnicos especializados",
                  "Empresas de mantención de flotas",
                  "Mecánico independiente",
                  "Empresas mineras y forestales",
                  "Centros de revisión técnica",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--color-neutral-700)]">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white">
            <h3 className="text-3xl font-bold mb-6 text-center">Infraestructura y Equipamiento</h3>
            <p className="text-lg text-center mb-8 max-w-3xl mx-auto leading-relaxed">
              Contamos con talleres completamente equipados con vehículos, herramientas y tecnología de diagnóstico para
              una formación práctica de excelencia.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2">Taller Mecánico</h4>
                <p className="text-neutral-200">Vehículos reales y elevadores para prácticas completas</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2">Equipos de Diagnóstico</h4>
                <p className="text-neutral-200">Scanner automotriz y equipos de medición especializados</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2">Herramientas Profesionales</h4>
                <p className="text-neutral-200">Set completo de herramientas mecánicas y neumáticas</p>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
