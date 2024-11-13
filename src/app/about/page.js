import { Progress } from "@/components/ui/progress"

export default function About() {
  return (
    <section className="bg-muted/50 py-12 md:py-24 border-b">
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
  )
}