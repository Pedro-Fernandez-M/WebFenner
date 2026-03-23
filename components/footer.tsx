import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary-dark)] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo-liceo.png"
                alt="Logo Liceo Bicentenario Industrial Ingeniero Ricardo Fenner Ruedi"
                width={60}
                height={60}
                className="object-contain"
              />
              <div>
                <h3 className="text-lg font-bold">Liceo Bicentenario Industrial...</h3>
                <p className="text-sm text-neutral-300">Ingeniero Ricardo Fenner Ruedi</p>
                <p className="text-xs text-neutral-400">Red SNA EDUCA • La Unión</p>
              </div>
            </div>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Formando técnicos profesionales de excelencia con compromiso, innovación y valores para el desarrollo
              industrial de nuestra región.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/indufenner/?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--color-primary)] flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/indufenner/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--color-primary)] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--color-primary)] flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--color-primary)] flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="font-bold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-neutral-300 hover:text-[var(--color-highlight)] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-neutral-300 hover:text-[var(--color-highlight)] transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#academico" className="text-neutral-300 hover:text-[var(--color-highlight)] transition-colors">
                  Académico
                </a>
              </li>
              <li>
                <a href="#noticias" className="text-neutral-300 hover:text-[var(--color-highlight)] transition-colors">
                  Noticias
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-neutral-300 hover:text-[var(--color-highlight)] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3 text-neutral-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>La Unión, Región de Los Ríos, Chile</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+56 (64) XXX XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>contacto@liceofenner.cl</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-neutral-300">
          <p>
            © {new Date().getFullYear()} Liceo Bicentenario Industrial Ingeniero Ricardo Fenner Ruedi. Todos los
            derechos reservados.
          </p>
          <p className="text-sm mt-2 text-neutral-400">Red SNA EDUCA • La Unión</p>
        </div>
      </div>
    </footer>
  )
}
