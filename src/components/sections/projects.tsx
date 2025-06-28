import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Spotify - Hybrid Recommendation System",
    description:
      "Built a scalable hybrid recommender system processing 10M user records with Dask, combining content-based and collaborative filtering. Deployed an interactive Streamlit app on AWS with a CI/CD pipeline, using Docker for containerization and DVC for data versioning.",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxzcG90aWZ5fGVufDB8fHx8MTc1MTEwNzM2OHww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Python", "Dask", "Streamlit", "Docker", "AWS", "DVC"],
  },
  {
    title: "Project Beta",
    description:
      "A scalable web application for real-time data visualization and analysis.",
    image: "https://placehold.co/600x400.png",
    tags: ["React", "Node.js", "D3.js"],
    aiHint: "dashboard chart",
  },
];

export function Projects() {
  return (
    <section id="projects" className="w-full py-8">
      <div className="w-full max-w-4xl mx-auto px-4 md:px-6">
        <div className="space-y-4">
          <h2 className="text-[1.7rem] font-bold tracking-tighter">Projects</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <Card key={project.title}>
                <CardHeader>
                  <Image
                    src={project.image}
                    alt={project.title}
                    data-ai-hint={project.aiHint}
                    width={600}
                    height={400}
                    className="rounded-t-lg object-cover"
                  />
                  <CardTitle className="pt-4">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
