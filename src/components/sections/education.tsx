const educations = [
  {
    institution: "Pimpri Chinchwad College Of Engineering",
    degree: "Bachelor of Technology - BTech, Mechanical Engineering",
    duration: "Dec 2020 - May 2024",
    description: "",
  },
  {
    institution: "Pimpri Chinchwad College Of Engineering",
    degree: "Minors Software Development, Information Technology",
    duration: "Jun 2022 - May 2024",
    description: "",
  },
];

export function Education() {
  return (
    <section id="education" className="w-full py-8">
      <div className="w-full max-w-4xl mx-auto px-4 md:px-6">
        <div className="space-y-4">
          <h2 className="text-[1.7rem] font-bold tracking-tighter">Education</h2>
          <div className="space-y-8">
            {educations.map((edu) => (
              <div key={edu.degree}>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xl font-bold">{edu.institution}</h3>
                  <p className="text-sm text-muted-foreground">
                    {edu.duration}
                  </p>
                </div>
                <p className="text-md font-medium">{edu.degree}</p>
                <p className="text-custom mt-2">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
