import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="py-12 md:py-24 border-b">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div className="relative w-48 h-48 mx-auto md:mx-0">
              <Image
                src="/ai.jpeg"
                alt="Profile"
                className="rounded-full object-cover"
                fill
                priority
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-serif mb-4">Barkha Verma</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Senior Applied AI Engineer.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" passHref>
                  <Button>Talk with me</Button>
                </Link>
                <Link href="/projects" passHref>
                  <Button variant="outline">See my work</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              I am an AI engineer creating innovative solutions using LLMs, generative AI, machine learning, and NLP to enhance real-world experiences.
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}