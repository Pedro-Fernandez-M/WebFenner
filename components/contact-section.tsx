"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { withBasePath } from "@/lib/asset-path"

export function ContactSection() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para enviar el formulario
    alert("¡Gracias por contactarnos! Te responderemos pronto.")
  }

  return (
    <section id="contacto" ref={sectionRef} className="py-24 bg-[var(--color-neutral-100)]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4">Contáctanos</h2>
          <p className="text-xl text-[var(--color-neutral-700)] max-w-3xl mx-auto text-pretty leading-relaxed">
            Estamos aquí para responder tus preguntas y ayudarte en el proceso de admisión
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <Card className="p-8 bg-white border-none shadow-lg">
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6">Envíanos un Mensaje</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nombre Completo</Label>
                  <Input id="name" placeholder="Tu nombre" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" type="tel" placeholder="+56 9 1234 5678" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    rows={5}
                    required
                    className="mt-2"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white text-lg py-6"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info & Map */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Contact Info Cards */}
            <div className="grid gap-6">
              <Card className="p-6 bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-primary)] mb-1">Dirección</h4>
                    <p className="text-[var(--color-neutral-700)]">
                      Ruta T-74 km 7
                      <br />
                      La Unión, Región de Los Ríos
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-primary)] mb-1">Teléfono</h4>
                    <p className="text-[var(--color-neutral-700)]">
                      +56 64 248 1234
                      <br />
                      +56 9 8765 4321
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[var(--color-primary)] mb-1">Email</h4>
                    <p className="text-[var(--color-neutral-700)] mb-4">
                      contacto@liceofenner.cl
                      <br />
                      admisiones@liceofenner.cl
                    </p>
                    {/* Logo Centro de Innovación */}
                    <div className="mt-4 pt-4 border-t border-[var(--color-neutral-200)]">
                      <Image
                        src={withBasePath("/logo-centro-innovacion.png")}
                        alt="Centro de Innovación"
                        width={180}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-primary)] mb-1">Horario de Atención</h4>
                    <p className="text-[var(--color-neutral-700)]">
                      Lunes a Viernes: 8:00 AM - 5:00 PM
                      <br />
                      Sábados: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Map */}
            <Card className="overflow-hidden border-none shadow-lg h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.326051181353!2d-73.00300212453057!3d-40.31292078096111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96166a223fc5b313%3A0xadca52d070d89c84!2sLiceo%20Bicentenario%20Industrial%20Ingeniero%20Ricardo%20Fenner%20Ruedi!5e0!3m2!1ses!2scl!4v1762953521588!5m2!1ses!2scl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del Liceo Bicentenario Industrial Ingeniero Ricardo Fenner Ruedi"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
