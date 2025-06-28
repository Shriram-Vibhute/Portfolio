import Image from "next/image";

const educations = [
  {
    institution: "Pimpri Chinchwad College Of Engineering, Pune",
    degree: "Bachelor of Technology - BTech, Mechanical Engineering",
    duration: "Dec 2020 - May 2024",
    description: "",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/00/PCCOE-Logo-24.png",
  },
  {
    institution: "Pimpri Chinchwad College Of Engineering, Pune",
    degree: "Minors Software Development, Information Technology",
    duration: "Jun 2022 - May 2024",
    description: "",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/00/PCCOE-Logo-24.png",
  },
];

const certifications = [
  {
    title: "Data Science Mentorship Program 2.0",
    institution: "CampusX",
    duration: "Sept 2024 - Present",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQHv4tJL2rlC9w/company-logo_200_200/company-logo_200_200/0/1704532900716/campusx_official_logo?e=2147483647&v=beta&t=uzBlM-y9qmF_9YKsBrVrASraHD5zgB2OaolwZHMwjrk",
    description: [
      "Acquired strong foundations in programming, data analysis, and machine learning, covering both supervised and unsupervised learning, model evaluation, and feature engineering through hands-on projects.",
      "Gained practical knowledge in MLOps, cloud deployment, version control, and CI/CD pipelines, along with a solid understanding of essential mathematics including statistics, probability, and linear algebra."
    ]
  },
];

export function Education() {
  return (
    <section id="education" className="w-full py-8">
      <div className="w-full max-w-4xl mx-auto px-4 md:px-6">
        <div className="space-y-4">
          <h2 className="text-[1.7rem] font-bold tracking-tighter">Education & Certifications</h2>
          <div className="space-y-8">
            {educations.map((edu) => (
              <div key={edu.degree}>
                <div className="flex items-start gap-4">
                  {edu.logo && (
                    <Image
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      width={40}
                      height={40}
                      className="rounded-full object-contain"
                    />
                  )}
                  <div className="flex-grow">
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-[1.1rem] font-bold">{edu.institution}</h3>
                      <p className="text-sm text-muted-foreground">
                        {edu.duration}
                      </p>
                    </div>
                    <p className="text-md font-medium">{edu.degree}</p>
                    <p className="text-custom mt-2">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {certifications.map((cert) => (
              <div key={cert.title}>
                <div className="flex items-start gap-4">
                  {cert.logo && (
                    <Image
                      src={cert.logo}
                      alt={`${cert.title} logo`}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                  )}
                  <div className="flex-grow">
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-[1.1rem] font-bold">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {cert.duration}
                      </p>
                    </div>
                    <p className="text-md font-medium">{cert.institution}</p>
                    {cert.description.length > 0 && (
                      <ul className="list-disc list-inside space-y-1 text-custom mt-2">
                        {cert.description.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
