"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Newspaper } from "lucide-react"
import { FacebookFeed } from "@/components/facebook-feed"

export default function NoticiasPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
              Publicaciones oficiales del liceo sincronizadas directamente desde Facebook
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <FacebookFeed height={900} title="Noticias del liceo en Facebook" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
