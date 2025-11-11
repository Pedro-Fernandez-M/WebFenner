"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Newspaper } from "lucide-react"
import { getAllNoticias } from "@/data/noticias"

export default function NoticiasPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const noticias = getAllNoticias()

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
    <div className="min-h-screen bg-[var(--color-background)]">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Newspaper className="w-12 h-12 text-[var(--color-primary)]" />
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)]">Noticias y Novedades</h1>
            </div>
            <p className="text-xl text-[var(--color-neutral-700)] max-w-3xl mx-auto text-pretty leading-relaxed">
              Todas las noticias, logros y eventos de nuestra comunidad educativa
            </p>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {noticias.map((item) => (
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
        </div>
      </main>

      <Footer />
    </div>
  )
}
