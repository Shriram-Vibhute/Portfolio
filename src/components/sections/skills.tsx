import { Badge } from "@/components/ui/badge";

const skills = [
  "Python",
  "C",
  "C++",
  "SQL",
  "Scikit-learn",
  "PyTorch",
  "Keras",
  "TensorFlow",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "MLflow",
  "DVC",
  "Docker",
  "Git",
  "GitHub",
  "GitHub Actions",
  "Amazon Web Services (AWS)",
];

export function Skills() {
  return (
    <section id="skills" className="w-full py-8">
      <div className="w-full max-w-4xl mx-auto px-4 md:px-6">
        <div className="space-y-4">
          <h2 className="text-[1.7rem] font-bold tracking-tighter">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="default"
                className="rounded-md bg-[#2f2f2f] text-white hover:bg-[#2f2f2f]/90 text-sm font-normal"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
