const experiences = [
  {
    company: "Google",
    role: "Software Engineer",
    duration: "2021 - Present",
    description:
      "Worked on large-scale distributed systems and developed new features for Google's core products. Mentored junior engineers and contributed to internal tooling.",
  },
  {
    company: "Facebook",
    role: "Software Engineering Intern",
    duration: "Summer 2020",
    description:
      "Developed and shipped a new feature for the Facebook mobile app, improving user engagement by 5%. Worked with a cross-functional team of engineers, designers, and product managers.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="w-full py-8">
      <div className="w-full max-w-4xl mx-auto px-4 md:px-6">
        <div className="space-y-4">
          <h2 className="text-[1.7rem] font-bold tracking-tighter">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.company}>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground">
                    {exp.duration}
                  </p>
                </div>
                <p className="text-md font-medium">{exp.company}</p>
                <p className="text-custom mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
