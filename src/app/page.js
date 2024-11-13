import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Send } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
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
                    <Button as="a">Talk with me</Button>
                  </Link>
                  <Link href="/projects" passHref>
                    <Button as="a" variant="outline">See my work</Button>
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

      {/* Blog Section */}
      <section className="bg-muted/50 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-8">Latest Insights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "A Comprehensive guide for building a chatbot application using Taipy",
                image: "/taipy.jpeg"
              },
              {
                title: "Unlocking Complex Document Insights with OCR-Free Vision RAG and Colpali",
                image: "/colpali.jpeg"
              },
              {
                title: "How to Build a Custom Vision-Language Model with Llama 3.2",
                image: "/llama.jpeg"
              }
            ].map((post, index) => (
              <Card key={index} className="w-full">
                <CardContent className="p-4">
                  <div className="aspect-video relative mb-4">
                    <Image src={post.image} alt={post.title} className="rounded-lg object-cover" fill />
                  </div>
                  <h3 className="font-medium mb-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Exploring the latest advancements in AI and their impact on various industries.
                  </p>
                  <Button variant="link" className="p-0">
                    Read More
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}