"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Laptop, Server, Zap } from "lucide-react";

const skills = [
  {
    title: "Machine Learning",
    description: "Designing and implementing machine learning models and algorithms to solve complex problems",
    icon: Laptop,
  },
  {
    title: "Generative AI",
    description: "Developing innovative AI systems for generating content and automating creative tasks",
    icon: Server,
  },
  {
    title: "Clean Code",
    description: "Writing well-structured, maintainable, and efficient code for robust applications",
    icon: Code2,
  },
  {
    title: "Performance",
    description: "Enhancing application performance to ensure speed, scalability, and reliability",
    icon: Zap,
  },
];


export function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <h2 className="mb-4 text-center text-3xl font-bold">About Me</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
        I am a passionate AI Engineer with expertise in designing and deploying intelligent systems using cutting-edge technologies.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <skill.icon className="mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 font-semibold">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}