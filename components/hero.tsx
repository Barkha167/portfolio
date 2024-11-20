"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center py-20">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-olive-300">
            <Image
              src="poo.jpg"
              alt="Profile Picture"
              width={192}
              height={192}
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 text-4xl font-bold tracking-tight text-olive-800 sm:text-6xl"
        >
          Hi, I'm <span className="text-olive-600">Barkha Verma</span>
          <br />
          Applied AI Engineer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8 text-lg text-sage-700"
        >
          Creating intelligent and impactful AI-driven experiences
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-olive-600 text-white hover:bg-olive-700"
          >
            <a href="/contact">
              Get in touch <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}