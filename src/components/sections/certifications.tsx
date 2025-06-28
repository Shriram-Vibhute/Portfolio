import Image from "next/image";

const certifications = [
  {
    title: "Data Science Mentorship Program 2.0, CampusX",
    duration: "2024 - 2025",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQHv4tJL2rlC9w/company-logo_200_200/company-logo_200_200/0/1704532900716/campusx_official_logo?e=2147483647&v=beta&t=uzBlM-y9qmF_9YKsBrVrASraHD5zgB2OaolwZHMwjrk",
    description: [
      "Acquired strong foundations in programming, data analysis, and machine learning, covering both supervised and unsupervised learning, model evaluation, and feature engineering through hands-on projects.",
      "Gained practical knowledge in MLOps, cloud deployment, version control, and CI/CD pipelines, along with a solid understanding of essential mathematics including statistics, probability, and linear algebra."
    ]
  },
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
                    <div className="flex justify-between items-center">
                      <p className="font-semibold text-foreground">{cert.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {cert.duration}
                      </p>
                    </div>
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
