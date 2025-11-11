export interface Noticia {
  id: number
  title: string
  date: string
  category: string
  image: string
  excerpt: string
  content?: string
}

export const noticias: Noticia[] = [
  {
    id: 1,
    title: "Inauguración del Nuevo Taller de Electricidad",
    date: "15 de Marzo, 2024",
    category: "Infraestructura",
    image: "/placeholder.svg?height=400&width=600",
    excerpt:
      "Contamos con instalaciones de última generación para potenciar el aprendizaje práctico en electricidad industrial.",
    content:
      "El Liceo Bicentenario Industrial Ingeniero Ricardo Fenner Ruedi inauguró sus nuevas instalaciones del taller de electricidad, equipado con tecnología de punta para la formación de nuestros estudiantes.",
  },
  {
    id: 2,
    title: "Estudiantes Ganan Competencia Regional de Mecánica",
    date: "8 de Marzo, 2024",
    category: "Logros",
    image: "/placeholder.svg?height=400&width=600",
    excerpt: "Nuestros estudiantes de Mecánica Automotriz obtuvieron el primer lugar en la competencia regional.",
    content:
      "El equipo de estudiantes de 4° medio de la especialidad de Mecánica Automotriz demostró excelencia técnica y trabajo en equipo.",
  },
  {
    id: 3,
    title: "Feria de Especialidades Técnicas 2024",
    date: "1 de Marzo, 2024",
    category: "Eventos",
    image: "/placeholder.svg?height=400&width=600",
    excerpt:
      "Más de 100 proyectos técnicos fueron presentados por nuestros estudiantes en la feria anual de especialidades.",
    content:
      "La feria contó con la participación de todas las especialidades: Electricidad, Construcción, Instalaciones Sanitarias, Mecánica Automotriz y Estructuras Metálicas.",
  },
  {
    id: 4,
    title: "Convenio con Empresas Locales para Prácticas Profesionales",
    date: "22 de Febrero, 2024",
    category: "Alianzas",
    image: "/placeholder.svg?height=400&width=600",
    excerpt:
      "Firmamos convenios con 15 empresas de La Unión para ofrecer prácticas profesionales a nuestros estudiantes.",
    content:
      "Este convenio beneficiará directamente a los estudiantes de 3° y 4° medio, brindándoles experiencia real en el campo laboral.",
  },
  {
    id: 5,
    title: "Nuevo Equipamiento para Taller de Construcción",
    date: "15 de Febrero, 2024",
    category: "Infraestructura",
    image: "/placeholder.svg?height=400&width=600",
    excerpt: "Incorporamos herramientas y equipos modernos para el taller de Construcción Mención Edificación.",
    content:
      "La inversión en equipamiento permitirá a nuestros estudiantes trabajar con las mismas herramientas que utilizarán en su vida profesional.",
  },
  {
    id: 6,
    title: "Charla Técnica sobre Energías Renovables",
    date: "5 de Febrero, 2024",
    category: "Académico",
    image: "/placeholder.svg?height=400&width=600",
    excerpt:
      "Expertos en energías renovables compartieron conocimientos con estudiantes de la especialidad de Electricidad.",
    content:
      "La charla abordó temas de energía solar, eólica y las oportunidades laborales en el sector de energías limpias.",
  },
]

export function getLatestNoticias(count = 6): Noticia[] {
  return noticias.slice(0, count)
}

export function getAllNoticias(): Noticia[] {
  return noticias
}

export function getNoticiaById(id: number): Noticia | undefined {
  return noticias.find((noticia) => noticia.id === id)
}
