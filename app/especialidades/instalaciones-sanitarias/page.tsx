"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Droplets, BookOpen, Briefcase, Award, ArrowLeft, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function InstalacionesSanitariasPage() {
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
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Droplets className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)]">Instalaciones Sanitarias</h1>
                <p className="text-xl text-[var(--color-neutral-700)] mt-2">Especialidad Técnico Profesional</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="lg:col-span-2 p-8">
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">Descripción de la Especialidad</h2>
              <p className="text-[var(--color-neutral-700)] leading-relaxed mb-6">
                La especialidad de Instalaciones Sanitarias forma técnicos capacitados para diseñar, instalar y mantener
                sistemas de agua potable, alcantarillado, gas y climatización en edificaciones residenciales,
                comerciales e industriales. Nuestros estudiantes adquieren conocimientos en gasfitería, cañerías,
                sistemas de calefacción y normativas sanitarias vigentes.
              </p>
              <p className="text-[var(--color-neutral-700)] leading-relaxed">
                Durante su formación, los estudiantes desarrollan habilidades prácticas en la instalación de redes
                sanitarias, sistemas de evacuación de aguas, instalaciones de gas y sistemas de climatización,
                preparándolos para responder a las necesidades del sector construcción e industria.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
              <Award className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Título que Otorga</h3>
              <p className="text-lg font-semibold">Técnico de Nivel Medio en Instalaciones Sanitarias</p>
              <p className="mt-4 text-blue-50">Reconocido por el Ministerio de Educación</p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <BookOpen className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6">Áreas de Aprendizaje</h3>
              <ul className="space-y-3">
                {[
                  "Instalaciones de agua potable fría y caliente",
                  "Sistemas de alcantarillado y evacuación",
                  "Instalaciones de gas domiciliario e industrial",
                  "Sistemas de calefacción y climatización",
                  "Lectura e interpretación de planos sanitarios",
                  "Normativa sanitaria y de seguridad",
                  "Cálculo de redes y dimensionamiento",
                  "Mantención y reparación de sistemas",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--color-neutral-700)]">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8">
              <Briefcase className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6">Campo Laboral</h3>
              <ul className="space-y-3">
                {[
                  "Empresas de instalaciones sanitarias",
                  "Constructoras y obras de edificación",
                  "Empresas de mantención de edificios",
                  "Servicios de gasfitería independiente",
                  "Empresas de climatización",
                  "Industrias y plantas de producción",
                  "Empresas de instalaciones de gas",
                  "Servicios públicos sanitarios",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--color-neutral-700)]">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white">
            <h3 className="text-3xl font-bold mb-6 text-center">Infraestructura y Equipamiento</h3>
            <p className="text-lg text-center mb-8 max-w-3xl mx-auto leading-relaxed">
              Nuestros talleres cuentan con instalaciones completas para que los estudiantes practiquen en condiciones
              similares a las que encontrarán en el campo laboral.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2">Taller de Cañerías</h4>
                <p className="text-neutral-200">Paneles de práctica con redes de agua y alcantarillado</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2">Laboratorio de Gas</h4>
                <p className="text-neutral-200">Instalaciones para prácticas de sistemas de gas</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2">Herramientas Especializadas</h4>
                <p className="text-neutral-200">Equipos profesionales de gasfitería y soldadura</p>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
