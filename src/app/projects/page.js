import Image from "next/image"
import { ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Projects() {
  return (
    <section className="bg-muted/50 py-12 md:py-24 border-b">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Sport Analytics",
              description: "A single-stop solution for tracking and analyzing performance in various physical or sports activities with coaching modules, for users to enhance their performance with live rank comparison at global and regional levels. The use case revolves around Computer Vision and Analytics.",
              image: "/sports_analytics.jpeg"
            },
            {
              title: "Liquor Brand Computer Vision Project",
              description: "A solution for tracking and managing the liquor stock in the Outlets helps to automate the management of liquor stock and provide a count of each liquor category present in stock.",
              image: "/object_detection.png"
            },
            {
              title: "Enterprise Data with Generative AI",
              description: "Implemented an enterprise data project focused on deploying ChatGPT for an organization. The objective is to have a chatbot that responds to organization-related queries, particularly emphasizing Cognitive AI.",
              image: "/gen_ai.jpeg"
            }
          ].map((project, index) => (
            <Card key={index} className="w-full">
              <CardContent className="p-4">
                <div className="aspect-video relative mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg object-cover"
                    fill
                  />
                </div>
                <h3 className="font-medium mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <Button variant="outline" size="sm">
                  View Case Study
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}