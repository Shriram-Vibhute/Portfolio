import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const experienceData = [
  {
    role: "Senior Software Engineer",
    company: "Innovate Inc.",
    period: "2021 - Present",
    description: "Led the development of a cutting-edge e-commerce platform, improving performance by 40% and mentoring a team of junior developers.",
    achievements: [
      "Architected and implemented a microservices-based backend.",
      "Introduced a component library that standardized the UI across all products.",
      "Optimized database queries, reducing average response time by 200ms."
    ]
  },
  {
    role: "Software Engineer",
    company: "Tech Solutions",
    period: "2019 - 2021",
    description: "Developed and maintained features for a large-scale SaaS application used by thousands of clients worldwide.",
    achievements: [
      "Contributed to a 25% increase in user engagement by shipping key features.",
      "Refactored legacy code to modern React, improving maintainability.",
      "Wrote comprehensive unit and integration tests, increasing code coverage by 30%."
    ]
  },
  {
    role: "Junior Developer",
    company: "Code Crafters",
    period: "2018 - 2019",
    description: "Assisted in the development of client websites and internal tools, gaining foundational experience in web development.",
    achievements: [
      "Built responsive landing pages from scratch using HTML, CSS, and JavaScript.",
      "Collaborated with designers to implement pixel-perfect user interfaces.",
      "Gained proficiency in version control with Git and agile methodologies."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="w-full py-12 md:py-16 lg:py-20 bg-white/30 dark:bg-black/30">
      <div className="w-full max-w-[50%] mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Experience
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A timeline of my professional journey and key accomplishments in the tech industry.
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-1">
          {experienceData.map((exp, index) => (
            <Card key={index} className="w-full shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                  <CardTitle>{exp.role}</CardTitle>
                  <CardDescription className="mt-1 sm:mt-0">{exp.period}</CardDescription>
                </div>
                <CardDescription className="font-semibold text-primary/80">{exp.company}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {exp.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
