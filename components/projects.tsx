"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Sport Analytics",
    description: "A single-stop solution for tracking and analyzing performance in various physical or sports activities with coaching modules, for users to enhance their performance with live rank comparison at global and regional levels. The use case revolves around Computer Vision and Analytics.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Pytorch", "Deep learning", "Densepose", "Python"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Liquor Brand Computer Vision Project",
    description: "A solution for tracking and managing the liquor stock in the Outlets helps to automate the management of liquor stock and provide a count of each liquor category present in stock.",
    image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&q=80",
    tags: ["Yolov", "Deep learning", "python", "AWS"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Enterprise Data with Generative AI",
    description: "Implemented an enterprise data project focused on deploying ChatGPT for an organization. The objective is to have a chatbot that responds to organization-related queries, particularly emphasizing Cognitive AI.",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80",
    tags: ["Python", "AWS", "OpenAI", "LLM"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <h2 className="mb-4 text-center text-3xl font-bold">Featured Projects</h2>
        <p className="mb-12 text-center text-muted-foreground">
          Here are some of my recent works
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-muted-foreground hover:text-primary"
                    >
                      <Github className="mr-1 h-4 w-4" /> Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-muted-foreground hover:text-primary"
                    >
                      <ExternalLink className="mr-1 h-4 w-4" /> Demo
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}