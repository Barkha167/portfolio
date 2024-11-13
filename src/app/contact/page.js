import { Mail, Download } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section className="py-12 md:py-24 border-b">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-4">Let's Innovate Together</h2>
          <p className="text-muted-foreground mb-8">
            I am always open to discussing AI projects, research collaborations, or partnership opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email Me
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}