"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, BookOpen, Briefcase, Award, ArrowLeft, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function ElectricidadPage() {
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
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)]">Electricidad</h1>
                <p className="text-xl text-[var(--color-neutral-700)] mt-2">Especialidad Técnico Profesional</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="lg:col-span-2 p-8">
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">Descripción de la Especialidad</h2>
              <p className="text-[var(--color-neutral-700)] leading-relaxed mb-6">
                La especialidad de Electricidad forma técnicos capacitados para diseñar, instalar, mantener y reparar
                sistemas eléctricos en instalaciones residenciales, comerciales e industriales. Nuestros estudiantes
                adquieren conocimientos sólidos en circuitos eléctricos, automatización, control industrial y energías
                renovables.
              </p>
              <p className="text-[var(--color-neutral-700)] leading-relaxed">
                Durante 3° y 4° medio, los estudiantes desarrollan competencias prácticas en nuestros talleres equipados
                con tecnología moderna, preparándolos para insertarse exitosamente en el mundo laboral o continuar
                estudios superiores en el área.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-yellow-500 to-amber-500 text-white">
              <Award className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Título que Otorga</h3>
              <p className="text-lg font-semibold">Técnico de Nivel Medio en Electricidad</p>
              <p className="mt-4 text-yellow-50">Reconocido por el Ministerio de Educación</p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <BookOpen className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6">Áreas de Aprendizaje</h3>
              <ul className="space-y-3">
                {[
                  "Instalaciones eléctricas domiciliarias e industriales",
                  "Circuitos eléctricos y electrónica básica",
                  "Automatización y control industrial",
                  "Máquinas eléctricas y transformadores",
                  "Energías renovables y eficiencia energética",
                  "Normativa eléctrica y seguridad",
                  "Lectura e interpretación de planos eléctricos",
                  "Mantención preventiva y correctiva",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--color-neutral-700)]">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8">
              <Briefcase className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6">Campo Laboral</h3>
              <ul className="space-y-3">
                {[
                  "Empresas de instalaciones eléctricas",
                  "Industrias y plantas de producción",
                  "Empresas de mantención eléctrica",
                  "Constructoras y obras civiles",
                  "Empresas de energías renovables",
                  "Servicios técnicos independientes",
                  "Empresas de automatización industrial",
                  "Sector minero y energético",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--color-neutral-700)]">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white">
            <h3 className="text-3xl font-bold mb-6 text-center">Infraestructura y Equipamiento</h3>
            <p className="text-lg text-center mb-8 max-w-3xl mx-auto leading-relaxed">
              Contamos con talleres completamente equipados con herramientas y equipos de última generación para que
              nuestros estudiantes desarrollen sus habilidades en un ambiente profesional.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2">Taller de Instalaciones</h4>
                <p className="text-neutral-200">Paneles de práctica y simuladores de instalaciones reales</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2">Laboratorio de Control</h4>
                <p className="text-neutral-200">PLCs, sensores y sistemas de automatización industrial</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2">Equipos Profesionales</h4>
                <p className="text-neutral-200">Instrumentos de medición y herramientas especializadas</p>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
