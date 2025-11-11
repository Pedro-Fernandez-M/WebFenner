"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { getLatestNoticias } from "@/data/noticias"

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

  const news = getLatestNoticias(6)

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Infraestructura: "bg-blue-500",
      Logros: "bg-green-500",
      Eventos: "bg-purple-500",
      Académico: "bg-orange-500",
      Alianzas: "bg-pink-500",
    }
    return colors[category] || "bg-gray-500"
  }

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
            Mantente informado sobre los últimos acontecimientos, logros y eventos de nuestra comunidad educativa
          </p>
        </div>

        {/* News Grid */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {news.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className={`absolute top-4 right-4 ${getCategoryColor(item.category)} text-white`}>
                  {item.category}
                </Badge>
              </div>
              <div className="p-6 bg-white">
                <div className="flex items-center gap-2 text-sm text-[var(--color-neutral-700)] mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3 text-balance">{item.title}</h3>
                <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">{item.excerpt}</p>
                <Button
                  variant="ghost"
                  className="text-[var(--color-accent)] hover:text-[var(--color-accent-light)] p-0 h-auto font-semibold"
                >
                  Leer más
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
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
