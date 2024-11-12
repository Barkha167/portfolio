'use client'

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Download, ExternalLink, Mail, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Component() {
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const hash = window.location.hash
    if (hash === '#about') scrollToSection(aboutRef)
    if (hash === '#projects') scrollToSection(projectsRef)
    if (hash === '#contact') scrollToSection(contactRef)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="border-b sticky top-0 bg-background z-10">
        <div className="container mx-auto px-4">
          <nav className="py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold">
              Barkha
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection(aboutRef)} className="text-sm hover:text-primary">
                About me
              </button>
              <button onClick={() => scrollToSection(projectsRef)} className="text-sm hover:text-primary">
                Projects
              </button>
              <button onClick={() => scrollToSection(contactRef)} className="text-sm hover:text-primary">
                Contact us
              </button>
            </div>
            <Button onClick={() => scrollToSection(projectsRef)}>See my work</Button>
          </nav>
        </div>
      </header>

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
                  <Button onClick={() => scrollToSection(contactRef)}>Talk with me</Button>
                  <Button variant="outline" onClick={() => scrollToSection(projectsRef)}>See my work</Button>
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

      {/* About Section */}
      <section id="about" ref={aboutRef} className="bg-muted/50 py-12 md:py-24 border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                I am a passionate Senior Applied AI Engineer with over 3 years of experience in creating innovative AI solutions
                that drive engagement and deliver results.
              </p>
              <p className="text-muted-foreground">
                My approach combines cutting-edge AI technologies with practical application, ensuring that every project
                not only pushes the boundaries of what is possible but also delivers real-world value.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { name: "Machine Learning", value: 95 },
                { name: "Deep Learning", value: 90 },
                { name: "Natural Language Processing", value: 85 },
                { name: "Generative AI", value: 92 },
                { name: "Python", value: 98 },
                { name: "AWS", value: 85 },
                { name: "Azure", value: 80 },
                { name: "SQL", value: 90 }
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <Progress value={skill.value} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 md:py-24 border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-8">Working experience</h2>
          <div className="space-y-4">
            {[
              { title: "Senior Applied AI Engineer", company: "Crossml", period: "Feb 2024 - Present", logo: "/crossml-logo.png" },
              { title: "Machine Learning Engineer", company: "Xenonstack", period: "Dec 2021 - Jan 2024", logo: "/xenonstack_logo.jpeg" }
            ].map((job, index) => (
              <Card key={index} className="w-full">
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Image src={job.logo} alt={`${job.company} logo`} width={24} height={24} />
                    </div>
                    <div>
                      <h3 className="font-medium">{job.title}</h3>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">{job.period}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="bg-muted/50 py-12 md:py-24 border-b">
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

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-12 md:py-24 border-b">
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
    </div>
  )
}