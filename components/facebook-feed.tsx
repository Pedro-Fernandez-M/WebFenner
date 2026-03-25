const FACEBOOK_PAGE_URL = "https://www.facebook.com/indufenner"

type FacebookFeedProps = {
  height?: number
  title?: string
  compact?: boolean
}

export function FacebookFeed({
  height = 720,
  title = "Publicaciones recientes en Facebook",
  compact = false,
}: FacebookFeedProps) {
  const params = new URLSearchParams({
    href: FACEBOOK_PAGE_URL,
    tabs: "timeline",
    width: "500",
    height: String(height),
    small_header: compact ? "true" : "false",
    adapt_container_width: "true",
    hide_cover: compact ? "true" : "false",
    show_facepile: "false",
  })

  return (
    <div className="space-y-4">
      <div className="rounded-3xl bg-white p-4 shadow-lg md:p-6">
        <iframe
          title={title}
          src={`https://www.facebook.com/plugins/page.php?${params.toString()}`}
          width="100%"
          height={height}
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </div>

      <div className="text-center">
        <a
          href={FACEBOOK_PAGE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
        >
          Ver todas las publicaciones en Facebook
        </a>
      </div>
    </div>
  )
}