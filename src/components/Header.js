import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="border-b sticky top-0 bg-background z-10">
      <div className="container mx-auto px-4">
        <nav className="py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold">
            Barkha
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/about" className="text-sm hover:text-primary">
              About me
            </Link>
            <Link href="/projects" className="text-sm hover:text-primary">
              Projects
            </Link>
            <Link href="/experience" className="text-sm hover:text-primary">
              Experience
            </Link>
            <Link href="/contact" className="text-sm hover:text-primary">
              Contact us
            </Link>
          </div>
          <Link href="/projects" passHref>
            <Button>See my work</Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}