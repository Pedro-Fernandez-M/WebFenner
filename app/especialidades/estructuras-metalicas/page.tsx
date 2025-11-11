"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Factory, BookOpen, Briefcase, Award, ArrowLeft, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function EstructurasMetalicasPage() {
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
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-500 to-zinc-600 flex items-center justify-center">
                <Factory className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)]">Estructuras Metálicas</h1>
                <p className="text-xl text-[var(--color-neutral-700)] mt-2">Especialidad Técnico Profesional</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="lg:col-span-2 p-8">
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">Descripción de la Especialidad</h2>
              <p className="text-[var(--color-neutral-700)] leading-relaxed mb-6">
                La especialidad de Estructuras Metálicas forma técnicos capacitados para diseñar, fabricar y montar
                estructuras de acero para la construcción, industria y minería. Nuestros estudiantes desarrollan
                competencias en soldadura, corte, plegado, lectura de planos estructurales y cálculo de estructuras
                metálicas.
              </p>
              <p className="text-[var(--color-neutral-700)] leading-relaxed">
                Durante su formación, los estudiantes trabajan con equipos industriales de soldadura, corte y conformado
                de metales, aprendiendo técnicas modernas de fabricación y montaje de estructuras, preparándolos para el
                sector industrial y de la construcción.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-slate-500 to-zinc-600 text-white">
              <Award className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Título que Otorga</h3>
              <p className="text-lg font-semibold">Técnico de Nivel Medio en Estructuras Metálicas</p>
              <p className="mt-4 text-slate-200">Reconocido por el Ministerio de Educación</p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <BookOpen className="w-12 h-12 text-slate-600 mb-4" />
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6">Áreas de Aprendizaje</h3>
              <ul className="space-y-3">
                {[
                  "Soldadura al arco eléctrico (SMAW, GMAW, GTAW)",
                  "Lectura e interpretación de planos estructurales",
                  "Corte y conformado de metales",
                  "Cálculo y diseño de estructuras metálicas",
                  "Montaje de estructuras industriales",
                  "Trazado y desarrollo de piezas metálicas",
                  "Seguridad en trabajos de altura y soldadura",
                  "Control de calidad en soldadura",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--color-neutral-700)]">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8">
              <Briefcase className="w-12 h-12 text-slate-600 mb-4" />
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6">Campo Laboral</h3>
              <ul className="space-y-3">
                {[
                  "Empresas de fabricación de estructuras metálicas",
                  "Constructoras de obras industriales",
                  "Empresas de montaje industrial",
                  "Talleres de soldadura y calderería",
                  "Industria minera y forestal",
                  "Empresas de mantención industrial",
                  "Maestranza y talleres mecánicos",
                  "Proyectos de infraestructura",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--color-neutral-700)]">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white">
            <h3 className="text-3xl font-bold mb-6 text-center">Infraestructura y Equipamiento</h3>
            <p className="text-lg text-center mb-8 max-w-3xl mx-auto leading-relaxed">
              Nuestros talleres están equipados con maquinaria industrial y equipos de soldadura profesionales para una
              formación práctica de alto nivel.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2">Taller de Soldadura</h4>
                <p className="text-neutral-200">Equipos de soldadura eléctrica, MIG/MAG y TIG</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2">Maquinaria Industrial</h4>
                <p className="text-neutral-200">Plegadoras, cizallas, taladros y equipos de corte</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2">Área de Montaje</h4>
                <p className="text-neutral-200">Espacio para ensamblaje de estructuras a escala real</p>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
