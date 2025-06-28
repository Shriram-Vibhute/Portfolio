const educations = [
  {
    institution: "Cornell University",
    degree: "Master of Science in Computer Science",
    duration: "2019 - 2021",
    description:
      "Specialized in Machine Learning and Artificial Intelligence. Thesis on 'Deep Learning for Natural Language Understanding'.",
  },
  {
    institution: "Jadavpur University",
    degree: "Bachelor of Engineering in Computer Science",
    duration: "2015 - 2019",
    description:
      "Graduated with First Class Honours. Actively involved in the university's coding club and competitive programming.",
  },
];

export function Education() {
  return (
    <section id="education" className="w-full py-8">
      <div className="w-full max-w-[50%] mx-auto px-4 md:px-6">
        <div className="space-y-4">
          <h2 className="text-[1.7rem] font-bold tracking-tighter">Education</h2>
          <div className="space-y-8">
            {educations.map((edu) => (
              <div key={edu.institution}>
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
