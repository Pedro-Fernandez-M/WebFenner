import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Instituto Educativo - Excelencia y Valores",
  description:
    "Institución educativa moderna comprometida con la formación integral de estudiantes con valores sólidos y excelencia académica",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>{children}</body>
    </html>
  )
}
