import noticiasFacebook from "@/data/noticias.facebook.generated.json"

export interface Noticia {
  id: number
  title: string
  date: string
  category: string
  image: string
  excerpt: string
  content?: string
  sourceUrl?: string
}

export const noticias: Noticia[] = Array.isArray(noticiasFacebook) ? (noticiasFacebook as Noticia[]) : []

export function getLatestNoticias(count = 6): Noticia[] {
  return noticias.slice(0, count)
}

export function getAllNoticias(): Noticia[] {
  return noticias
}

export function getNoticiaById(id: number): Noticia | undefined {
  return noticias.find((noticia) => noticia.id === id)
}
