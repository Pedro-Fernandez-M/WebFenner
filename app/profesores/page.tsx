"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Users, Mail, Building2, GraduationCap, Shield, Briefcase, Heart, ShoppingCart, Wrench } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"
import { withBasePath } from "@/lib/asset-path"

export default function ProfesoresPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Equipo Directivo
  const equipoDirectivo = [
    {
      nombre: "Director(a)",
      cargo: "Enresto Uslar Goverts",
      email: "director@liceofenner.cl",
      imagen: "/images/funcionarios/Ernesto%20Uslar.jpeg",
      imagePosition: "object-[center_20%]",
      destacado: true,
    },
    {
      nombre: "Encargado(a) de Convivencia Escolar",
      cargo: "Ramón Aguilera",
      email: "convivencia@liceofenner.cl",
      imagen: "/images/funcionarios/Ramon%20Aguilera.jpeg",
      imagePosition: "object-[center_20%]",
    },
    {
      nombre: "Jefa UTP",
      cargo: "Miroslava Montesinos",
      email: "utp@liceofenner.cl",
      imagen: "/images/funcionarios/Miroslava%20Montecinos.jpeg",
      imagePosition: "object-[center_20%]",
    },
    {
      nombre: "Coordinador(a) de Especialidades",
      cargo: "Juan Diego Garcia",
      email: "coordinador@liceofenner.cl",
      imagen: "/images/funcionarios/Juan%20Diego.jpeg",
      imagePosition: "object-[center_20%]",
    },
    {
      nombre: "Jefe Administrativo",
      cargo: "Jaime Navarrete",
      email: "ilu.administracion@snaeduca.cl",
      imagen: "/images/funcionarios/Jaime%20Navarrete.jpeg",
      imagePosition: "object-[center_20%]",
    }
  ]

  // Área Administrativa y Finanzas
  const areaAdministrativa = [
    {
      nombre: "Jefe Administrativo",
      cargo: "Jefe de Administración",
      email: "administracion@liceofenner.cl",
      imagen: "/placeholder.svg?height=300&width=300",
      destacado: true,
    },
    {
      nombre: "Encargada de Tesorería",
      cargo: "Tesorería",
      email: "tesoreria@liceofenner.cl",
      imagen: "/placeholder.svg?height=300&width=300",
    },
    {
      nombre: "Encargado de Adquisiciones",
      cargo: "Adquisiciones",
      email: "adquisiciones@liceofenner.cl",
      imagen: "/placeholder.svg?height=300&width=300",
    },
    {
      nombre: "Encargada de Remuneraciones",
      cargo: "Remuneraciones",
      email: "remuneraciones@liceofenner.cl",
      imagen: "/placeholder.svg?height=300&width=300",
    },
  ]

  // Profesores (41 profesores de ejemplo)
  const profesores = Array.from({ length: 41 }, (_, i) => ({
    nombre: `Profesor(a) ${i + 1}`,
    cargo: "Docente",
    email: `profesor${i + 1}@liceofenner.cl`,
    imagen: `/placeholder.svg?height=300&width=300&query=profesor-${i + 1}`,
  }))

  // Departamento PIE (14 personas)
  const departamentoPIE = Array.from({ length: 14 }, (_, i) => ({
    nombre: `Profesional PIE ${i + 1}`,
    cargo: "Programa de Integración Escolar",
    email: `pie${i + 1}@liceofenner.cl`,
    imagen: `/placeholder.svg?height=300&width=300&query=pie-${i + 1}`,
    destacado: true,
  }))

  // Inspectores (23 inspectores)
  const inspectores = Array.from({ length: 23 }, (_, i) => ({
    nombre: `Inspector(a) ${i + 1}`,
    cargo: "Inspector",
    email: `inspector${i + 1}@liceofenner.cl`,
    imagen: `/placeholder.svg?height=300&width=300&query=inspector-${i + 1}`,
  }))

  // Profesionales de Apoyo (17 personas)
  const profesionalesApoyo = Array.from({ length: 17 }, (_, i) => ({
    nombre: `Profesional de Apoyo ${i + 1}`,
    cargo: "Apoyo Educativo",
    email: `apoyo${i + 1}@liceofenner.cl`,
    imagen: `/placeholder.svg?height=300&width=300&query=apoyo-${i + 1}`,
  }))

  // Economato (10 personas)
  const economato = Array.from({ length: 10 }, (_, i) => ({
    nombre: `Personal Economato ${i + 1}`,
    cargo: "Economato",
    email: `economato${i + 1}@liceofenner.cl`,
    imagen: `/placeholder.svg?height=300&width=300&query=economato-${i + 1}`,
  }))

  // Asistentes (13 personas)
  const asistentes = Array.from({ length: 13 }, (_, i) => ({
    nombre: `Asistente ${i + 1}`,
    cargo: "Asistente de la Educación",
    email: `asistente${i + 1}@liceofenner.cl`,
    imagen: `/placeholder.svg?height=300&width=300&query=asistente-${i + 1}`,
  }))

  // Componente reutilizable para tarjetas de personal
  const PersonCard = ({ persona, compact = false }: { persona: any; compact?: boolean }) => (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group h-full flex flex-col ${
        persona.destacado ? "ring-2 ring-[var(--color-primary)]" : ""
      }`}
    >
      <div className={`relative ${compact ? "h-44" : "h-64"} bg-[var(--color-neutral-200)] overflow-hidden`}>
        <Image
          src={withBasePath(persona.imagen || "/placeholder.svg")}
          alt={persona.nombre}
          fill
          className={`object-cover ${persona.imagePosition || "object-center"} group-hover:scale-105 transition-transform duration-300`}
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className={`font-bold text-[var(--color-neutral-900)] mb-2 leading-snug ${compact ? "text-lg min-h-[3.5rem]" : "text-xl"}`}>
          {persona.nombre}
        </h3>
        <p className={`text-[var(--color-primary)] font-semibold mb-4 ${compact ? "min-h-[3rem]" : ""}`}>
          {persona.cargo}
        </p>
        <a
          href={`mailto:${persona.email}`}
          className="mt-auto flex items-center gap-2 text-sm text-[var(--color-neutral-700)] hover:text-[var(--color-primary)] transition-colors break-all"
        >
          <Mail className="w-4 h-4" />
          {persona.email}
        </a>
      </div>
    </div>
  )

  // Componente para secciones
  const Section = ({
    title,
    icon: Icon,
    personas,
    color,
    gridClass = "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    compactCards = false,
    featuredFirst = false,
  }: any) => {
    const personaDestacada = featuredFirst ? personas[0] : null
    const personasSecundarias = featuredFirst ? personas.slice(1) : personas

    return (
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <Icon className={`w-8 h-8 ${color}`} />
          <h2 className="text-3xl font-bold text-[var(--color-neutral-900)]">{title}</h2>
          <span className="ml-auto text-lg font-semibold text-[var(--color-neutral-600)]">
            {personas.length} {personas.length === 1 ? "persona" : "personas"}
          </span>
        </div>

        {personaDestacada && (
          <div className="mb-6 flex justify-center">
            <div className="w-full sm:max-w-[18rem]">
              <PersonCard persona={personaDestacada} compact={compactCards} />
            </div>
          </div>
        )}

        <div
          className={`grid ${featuredFirst ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : gridClass} gap-6 items-stretch`}
        >
          {personasSecundarias.map((persona: any, index: number) => (
            featuredFirst ? (
              <div key={index} className="w-full sm:max-w-[18rem] mx-auto">
                <PersonCard persona={persona} compact={compactCards} />
              </div>
            ) : (
              <PersonCard key={index} persona={persona} compact={compactCards} />
            )
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestro Equipo</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Conoce a los profesionales comprometidos con la excelencia educativa del Liceo Bicentenario Industrial
              Ingeniero Ricardo Fenner Ruedi
            </p>
          </div>
        </div>
      </section>

      {/* Todas las Secciones */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Section
            title="Equipo Directivo"
            icon={Building2}
            personas={equipoDirectivo}
            color="text-[var(--color-primary)]"
            featuredFirst
            compactCards
          />

          <Section
            title="Área Administrativa y Finanzas"
            icon={Briefcase}
            personas={areaAdministrativa}
            color="text-[var(--color-accent-blue)]"
          />

          <Section
            title="Profesores"
            icon={GraduationCap}
            personas={profesores}
            color="text-[var(--color-accent-green)]"
          />

          <Section
            title="Departamento PIE"
            icon={Heart}
            personas={departamentoPIE}
            color="text-[var(--color-accent-yellow)]"
          />

          <Section title="Inspectores" icon={Shield} personas={inspectores} color="text-[var(--color-primary)]" />

          <Section
            title="Profesionales de Apoyo"
            icon={Users}
            personas={profesionalesApoyo}
            color="text-[var(--color-accent-green)]"
          />

          <Section title="Economato" icon={ShoppingCart} personas={economato} color="text-[var(--color-accent-blue)]" />

          <Section title="Asistentes" icon={Wrench} personas={asistentes} color="text-[var(--color-accent-yellow)]" />
        </div>
      </section>

      <Footer />
    </div>
  )
}
