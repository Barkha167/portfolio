"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

const blogs = [
  {
    title: "A Comprehensive Guide to Building a Chatbot Application Using Taipy",
    description: "Learn how to create intelligent chatbot applications using the Taipy framework, step-by-step.",
    date: "2024-09-20",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
  },
  {
    title: "Unlocking Complex Document Insights with OCR-Free Vision RAG and Colpali",
    description: "Discover how to leverage OCR-free Vision RAG and Colpali to extract valuable insights from documents.",
    date: "2024-08-15",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
  },
  {
    title: "How to Build a Custom Vision-Language Model with Llama 3.2",
    description: "A deep dive into constructing a vision-language model using the latest advancements in Llama 3.2.",
    date: "2024-11-10",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
];



export function Blogs() {
  return (
    <section id="blog" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <h2 className="mb-4 text-center text-3xl font-bold">Latest Blog Posts</h2>
        <p className="mb-12 text-center text-muted-foreground">
          Thoughts and insights about web development
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <CardHeader>
                  <CardTitle>{blog.title}</CardTitle>
                  <CardDescription>{blog.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      {blog.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {blog.readTime}
                    </span>
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