const certifications = [
  {
    title: "Data Science Mentorship Program 2.0, CampusX - Certificate | GitHub | 2024 - 25",
    description: [
      "Acquired strong foundations in programming, data analysis, and machine learning, covering both supervised and unsupervised learning, model evaluation, and feature engineering through hands-on projects.",
      "Gained practical knowledge in MLOps, cloud deployment, version control, and CI/CD pipelines, along with a solid understanding of essential mathematics including statistics, probability, and linear algebra."
    ]
  },
  {
    title: "AWS Certified Solutions Architect - Associate",
    description: []
  },
  {
    title: "Google Certified Professional Data Engineer",
    description: []
  },
  {
    title: "TensorFlow Developer Certificate",
    description: []
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="w-full py-8">
      <div className="w-full max-w-4xl mx-auto px-4 md:px-6">
        <div className="space-y-4">
          <h2 className="text-[1.7rem] font-bold tracking-tighter">
            Certifications
          </h2>
          <div className="space-y-6">
            {certifications.map((cert) => (
              <div key={cert.title}>
                <p className="font-semibold text-foreground">{cert.title}</p>
                {cert.description.length > 0 && (
                  <ul className="list-disc list-inside space-y-1 text-custom mt-2">
                    {cert.description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
