import { Badge } from "@/components/ui/badge";

const skills = [
  "Java",
  "Python",
  "JavaScript",
  "C++",
  "Machine Learning",
  "Web Development",
  "Backbone.js",
  "Scala",
  "PHP",
  "Team Leadership",
];

export function Skills() {
  return (
    <section id="skills" className="w-full py-8">
      <div className="w-full max-w-[50%] mx-auto px-4 md:px-6">
        <div className="space-y-4">
          <h2 className="text-[1.7rem] font-bold tracking-tighter">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="default" className="text-sm font-normal">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
