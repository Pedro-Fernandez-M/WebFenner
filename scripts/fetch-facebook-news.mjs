import { writeFile } from "node:fs/promises"
import path from "node:path"

const PAGE_ID = process.env.FACEBOOK_PAGE_ID
const ACCESS_TOKEN = process.env.FACEBOOK_PAGE_ACCESS_TOKEN
const LIMIT = Number(process.env.FACEBOOK_POSTS_LIMIT || 9)

const OUTPUT_PATH = path.join(process.cwd(), "data", "noticias.facebook.generated.json")

function buildFallback(message) {
  return [{
    id: 1,
    title: "Noticias disponibles en Facebook",
    date: "Actualizado automáticamente",
    category: "Facebook",
    image: "/placeholder.svg?height=400&width=600",
    excerpt: message,
    content: message,
    sourceUrl: "https://www.facebook.com/indufenner",
  }]
}

function formatDate(input) {
  try {
    return new Intl.DateTimeFormat("es-CL", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(input))
  } catch {
    return "Fecha no disponible"
  }
}

function normalizePost(post, index) {
  const rawMessage = (post?.message || "").trim()
  const message = rawMessage || "Publicación en Facebook"
  const firstLine = message.split("\n").find((line) => line.trim().length > 0) || "Publicación en Facebook"

  return {
    id: index + 1,
    title: firstLine.slice(0, 90),
    date: formatDate(post?.created_time),
    category: "Facebook",
    image: post?.full_picture || "/placeholder.svg?height=400&width=600",
    excerpt: message.slice(0, 180),
    content: message,
    sourceUrl: post?.permalink_url || "https://www.facebook.com/indufenner",
  }
}

async function saveNews(news) {
  await writeFile(OUTPUT_PATH, `${JSON.stringify(news, null, 2)}\n`, "utf8")
}

async function main() {
  if (!PAGE_ID || !ACCESS_TOKEN) {
    await saveNews(buildFallback("Configura FACEBOOK_PAGE_ID y FACEBOOK_PAGE_ACCESS_TOKEN para sincronizar publicaciones reales."))
    console.log("[facebook-news] Missing credentials. Generated fallback data.")
    return
  }

  const params = new URLSearchParams({
    fields: "message,created_time,full_picture,permalink_url",
    limit: String(LIMIT),
    access_token: ACCESS_TOKEN,
  })

  const url = `https://graph.facebook.com/v23.0/${PAGE_ID}/posts?${params.toString()}`

  try {
    const response = await fetch(url)
    const payload = await response.json()

    if (!response.ok || !Array.isArray(payload?.data)) {
      const detail = payload?.error?.message || "No se pudieron obtener posts desde Graph API."
      await saveNews(buildFallback(detail))
      console.log(`[facebook-news] API error. Generated fallback data: ${detail}`)
      return
    }

    const posts = payload.data
      .filter((post) => post?.message || post?.full_picture)
      .map(normalizePost)

    if (posts.length === 0) {
      await saveNews(buildFallback("No hay publicaciones disponibles con contenido para mostrar."))
      console.log("[facebook-news] No usable posts. Generated fallback data.")
      return
    }

    await saveNews(posts)
    console.log(`[facebook-news] Synced ${posts.length} posts.`)
  } catch (error) {
    await saveNews(buildFallback("Error de red al sincronizar Facebook. Se muestra contenido de respaldo."))
    console.log(`[facebook-news] Network error. Generated fallback data: ${error instanceof Error ? error.message : String(error)}`)
  }
}

main()
