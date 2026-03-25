const PROD_BASE_PATH = "/WebFenner"

export function withBasePath(path: string): string {
  if (!path.startsWith("/")) {
    return path
  }

  const basePath = process.env.NODE_ENV === "production" ? PROD_BASE_PATH : ""
  return `${basePath}${path}`
}
