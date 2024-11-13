import Link from "next/link"
import localFont from "next/font/local"
import "./globals.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata = {
  title: "Barkha Verma - AI Engineer Portfolio",
  description: "Portfolio of Barkha Verma, Senior Applied AI Engineer",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-lg">Barkha Verma</span>
            </Link>
            <nav className="flex-1 flex justify-center items-center space-x-8 text-sm font-medium">
              <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
                About
              </Link>
              <Link href="/projects" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Projects
              </Link>
              <Link href="/experience" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Experience
              </Link>
              <Link href="/contact" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Contact
              </Link>
            </nav>
            <div className="w-[100px]">
              {/* This empty div helps balance the layout */}
            </div>
          </div>
        </header>
        <main className="flex-1">
          {children}
        </main>
        <footer className="border-t py-6 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}