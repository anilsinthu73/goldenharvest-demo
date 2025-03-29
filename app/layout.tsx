import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"
import Image from "next/image"
import { User } from "lucide-react"

import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { CartProvider } from "@/lib/cart-context"
import { CartButton } from "@/components/cart-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "GoldenHarvestRawproducts",
  description: "Premium quality raw powders from fruits, vegetables, and herbs.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <CartProvider>
            <div className="flex min-h-screen flex-col">
              <header className="sticky top-0 z-50 w-full border-b bg-background">
                <div className="container flex h-16 items-center">
                  <Link href="/" className="flex items-center gap-2">
                    <Image src="/images/logo.png" alt="Golden Harvest Logo" width={40} height={40} />
                    <span className="text-xl font-bold text-[#5c8d3e]">GoldenHarvest</span>
                  </Link>
                  <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
                      Home
                    </Link>
                    <Link href="/products" className="text-sm font-medium hover:underline underline-offset-4">
                      Products
                    </Link>
                    <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
                      About
                    </Link>
                    <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
                      Contact
                    </Link>
                  </nav>
                  <div className="ml-auto flex items-center gap-2">
                    <CartButton />
                    <Link href="/account">
                      <Button variant="outline" size="icon">
                        <User className="h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </header>
              <main className="flex-1">{children}</main>
              <footer className="border-t py-6 md:py-8">
                <div className="container flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
                  <div className="flex items-center gap-2">
                    <Image src="/images/logo.png" alt="Golden Harvest Logo" width={30} height={30} />
                    <p className="text-sm text-muted-foreground">
                      © 2025 GoldenHarvestRawproducts. All rights reserved.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 md:ml-auto">
                    <p className="text-sm text-muted-foreground">Contact: Arjunkumar Bandari</p>
                    <p className="text-sm text-muted-foreground">Phone: +91 9949589098</p>
                    <p className="text-sm text-muted-foreground">Email: Goldenharvest0648@gmail.com</p>
                  </div>
                  <nav className="flex gap-4 sm:gap-6 md:ml-auto">
                    <Link href="/terms" className="text-sm font-medium hover:underline underline-offset-4">
                      Terms
                    </Link>
                    <Link href="/privacy" className="text-sm font-medium hover:underline underline-offset-4">
                      Privacy
                    </Link>
                    <Link href="/shipping" className="text-sm font-medium hover:underline underline-offset-4">
                      Shipping
                    </Link>
                  </nav>
                </div>
              </footer>
            </div>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'