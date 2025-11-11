"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      window.location.href = `/#${id}`
      return
    }
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo-sna-educa.png" alt="Logo SNA EDUCA" width={45} height={45} className="object-contain" />
            <div className="w-px h-10 bg-[var(--color-neutral-300)]" />
            <Image
              src="/logo-liceo.png"
              alt="Logo Liceo Bicentenario Industrial Ingeniero Ricardo Fenner Ruedi"
              width={45}
              height={45}
              className="object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-base md:text-lg font-bold text-[var(--color-primary)] leading-tight">
                Liceo Bicentenario Industrial
              </h1>
              <p className="text-xs md:text-sm text-[var(--color-neutral-700)] font-semibold">
                Ingeniero Ricardo Fenner Ruedi
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-[var(--color-neutral-700)] hover:text-[var(--color-primary)] transition-colors font-medium"
            >
              Inicio
            </button>
            <Link
              href="/nosotros"
              className="text-[var(--color-neutral-700)] hover:text-[var(--color-primary)] transition-colors font-medium"
            >
              Nosotros
            </Link>
            <button
              onClick={() => scrollToSection("academico")}
              className="text-[var(--color-neutral-700)] hover:text-[var(--color-primary)] transition-colors font-medium"
            >
              Especialidades
            </button>
            <Link
              href="/profesores"
              className="text-[var(--color-neutral-700)] hover:text-[var(--color-primary)] transition-colors font-medium"
            >
              Nuestro Equipo
            </Link>
            <Link
              href="/noticias"
              className="text-[var(--color-neutral-700)] hover:text-[var(--color-primary)] transition-colors font-medium"
            >
              Noticias
            </Link>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white"
            >
              Contacto
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[var(--color-primary)]" />
            ) : (
              <Menu className="w-6 h-6 text-[var(--color-primary)]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white border-t animate-fade-in">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left px-4 py-2 text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)] rounded-lg transition-colors"
              >
                Inicio
              </button>
              <Link
                href="/nosotros"
                className="text-left px-4 py-2 text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)] rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nosotros
              </Link>
              <button
                onClick={() => scrollToSection("academico")}
                className="text-left px-4 py-2 text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)] rounded-lg transition-colors"
              >
                Especialidades
              </button>
              <Link
                href="/profesores"
                className="text-left px-4 py-2 text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)] rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nuestro Equipo
              </Link>
              <Link
                href="/noticias"
                className="text-left px-4 py-2 text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)] rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Noticias
              </Link>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-left px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                Contacto
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
