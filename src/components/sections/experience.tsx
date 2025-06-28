const experiences = [
  {
    company: "Kaggle",
    role: "Contributor",
    duration: "",
    description: [
      "Built more than 15 Notebooks covering various deep learning and machine learning projects and concepts. Got more than 50 upvotes for them.",
      "Created 5 plus Datasets related to different domain like movies, chat and others.",
      "Made a Project of Next Word Prediction using Bidirectional LSTM.",
    ],
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
                  <h3 className="text-[1.1rem] font-bold">{exp.role}</h3>
                  {exp.duration && (
                    <p className="text-sm text-muted-foreground">
                      {exp.duration}
                    </p>
                  )}
                </div>
                <p className="text-md font-medium">{exp.company}</p>
                {Array.isArray(exp.description) ? (
                  <ul className="list-disc list-inside space-y-1 text-custom mt-2">
                    {exp.description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-custom mt-2">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
