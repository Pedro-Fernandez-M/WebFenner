"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Facebook, Newspaper, School } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { FacebookFeed } from "@/components/facebook-feed"
import { withBasePath } from "@/lib/asset-path"

export function NewsSection() {
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
    <section id="noticias" ref={sectionRef} className="py-24 bg-[var(--color-background)]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4">Noticias y Novedades</h2>
          <p className="text-xl text-[var(--color-neutral-700)] max-w-3xl mx-auto text-pretty leading-relaxed">
            Revisa las publicaciones oficiales del liceo directamente desde Facebook, sin duplicar contenido manualmente
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-6">
              <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-black/5">
                <div className="relative h-72 md:h-80">
                  <img
                    src={withBasePath("/liceo-aire.jpg")}
                    alt="Vista aérea del liceo"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)]/85 via-[var(--color-primary)]/35 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm font-semibold backdrop-blur-sm">
                      <School className="h-4 w-4" />
                      Comunidad InduFenner
                    </div>
                    <h3 className="max-w-xl text-2xl font-bold md:text-3xl">Lo que pasa en el liceo, contado desde nuestros canales oficiales</h3>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white p-6 shadow-lg">
                  <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    <Newspaper className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[var(--color-primary)]">Noticias al día</h3>
                  <p className="text-[var(--color-neutral-700)] leading-relaxed">
                    Publicaciones, actividades, reconocimientos y avisos importantes del liceo reunidos en un solo lugar.
                  </p>
                </div>

                <div className="rounded-3xl bg-[var(--color-primary)] p-6 text-white shadow-lg">
                  <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-white">
                    <Facebook className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Síguenos en Facebook</h3>
                  <p className="mb-4 text-white/85 leading-relaxed">
                    Si prefieres ver el contenido completo, comentarios y álbumes, puedes abrir directamente nuestra página oficial.
                  </p>
                  <a
                    href="https://www.facebook.com/indufenner"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-semibold text-white"
                  >
                    Ir al Facebook del liceo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-3xl lg:max-w-none">
              <FacebookFeed height={640} compact />
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/noticias">
            <Button
              size="lg"
              className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-8"
            >
              Ver Todas las Noticias
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
