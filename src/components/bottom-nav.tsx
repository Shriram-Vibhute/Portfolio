"use client";

import {
  Github,
  Linkedin,
  Twitter,
  TrendingUp,
  FileText,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const navLinks = [
  {
    href: "https://github.com/Shriram-Vibhute",
    icon: Github,
    tooltip: "GitHub",
    target: "_blank",
  },
  {
    href: "https://www.linkedin.com/in/shriram-vibhute/",
    icon: Linkedin,
    tooltip: "LinkedIn",
    target: "_blank",
  },
  {
    href: "https://twitter.com/shriram_vibhute",
    icon: Twitter,
    tooltip: "Twitter",
    target: "_blank",
  },
  {
    href: "https://www.kaggle.com/shriramvibhute",
    icon: TrendingUp,
    tooltip: "Kaggle",
    target: "_blank",
  },
  {
    href: "https://drive.google.com/file/d/18Tht4yotbYSNPVrTTXaHR1dzCbsOrvFO/view?usp=drive_link",
    icon: FileText,
    tooltip: "Resume",
    target: "_blank",
  },
  {
    href: "mailto:shriram.vibhute08@gmail.com",
    icon: Mail,
    tooltip: "Contact",
    target: "_self",
  },
];

export function BottomNav() {
  return (
    <TooltipProvider>
      <nav className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2">
        <div className="flex items-center gap-1 rounded-full bg-black/50 backdrop-blur-md p-2 border border-gray-200/20 shadow-lg">
          {navLinks.map((link) => (
            <Tooltip key={link.tooltip}>
              <TooltipTrigger asChild>
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-white hover:bg-white/10 hover:text-white"
                >
                  <a
                    href={link.href}
                    target={link.target}
                    rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                    aria-label={link.tooltip}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </nav>
    </TooltipProvider>
  );
}
