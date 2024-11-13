import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function Experience() {
  return (
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
  )
}