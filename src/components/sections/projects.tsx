import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Hybrid Recommendation System",
    description:
      "Built a songs hybrid recommender system using machine learning and MLOps.",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxzcG90aWZ5fGVufDB8fHx8MTc1MTEwNzM2OHww&ixlib=rb-4.1.0&q=80&w=1080",
    link: "https://github.com/Shriram-Vibhute/Hybrid-Recommendor-System",
  },
  {
    title: "Comments Sentiment Analysis",
    description:
      "Built a chrome plugin which analyse and classify current youtube video's comments.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx5b3V0dWJlfGVufDB8fHx8MTc1MTEwNzkwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Node.js", "D3.js"],
    aiHint: "youtube logo",
  },
];

export function Projects() {
  return (
    <section id="projects" className="w-full py-8">
      <div className="w-full max-w-4xl mx-auto px-4 md:px-6">
        <div className="space-y-4">
          <h2 className="text-[1.7rem] font-bold tracking-tighter">Projects</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project: {title: string, description: string, image: string, link?: string, tags?: string[], aiHint?: string}) => (
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
                  <CardTitle className="pt-4 text-xl font-semibold tracking-tight">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {project.link ? (
                    <Button asChild className="bg-[#2f2f2f] hover:bg-[#2f2f2f]/90">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </a>
                    </Button>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {project.tags?.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
