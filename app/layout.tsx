import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { CartProvider, ThemeProvider, ProductProvider } from "@/lib/contexts"
import { ProductModal } from "@/components/product-modal"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pak Auto Care - Premium Vehicle Care Products",
  description:
    "Premium automotive care accessories and products for Pakistani vehicles. Car shampoos, waxes, cleaners, and microfiber towels.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider>
          <CartProvider>
            <ProductProvider>
              {children}
              <ProductModal />
            </ProductProvider>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
