
"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
} from "@tabler/icons-react";
import { LinkedinIcon, FileText, Mail } from "lucide-react";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Portfolio Hero", // Tooltip for the logo
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full text-neutral-500 dark:text-neutral-300 group-hover:text-primary transition-colors duration-200"
          aria-hidden="true"
        >
          {/* Simple shield with a dot logo */}
          <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91c4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 2.24L17.67 6.5V11.09c0 3.94-2.53 7.52-5.67 8.65a7.962 7.962 0 01-5.67-8.65V6.5L12 4.24zM12 11a1 1 0 100-2 1 1 0 000 2z" />
        </svg>
      ),
      href: "#", // Logo links to the top of the page
    },
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: (
        <LinkedinIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Kaggle",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        >
          <path d="m13.11 7.664 1.78 2.672" />
          <path d="m14.162 12.788-3.324 1.424" />
          <path d="m20 4-6.06 1.515" />
          <path d="M3 3v16a2 2 0 0 0 2 2h16" />
          <circle cx="12" cy="6" r="2" />
          <circle cx="16" cy="12" r="2" />
          <circle cx="9" cy="15" r="2" />
        </svg>
      ),
      href: "#",
    },
    {
      title: "Resume",
      icon: (
        <FileText className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Mail",
      icon: (
        <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:your-email@example.com", // Replace with actual email
    },
    {
      title: "Website",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      ),
      href: "#",
    },
  ];
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center p-4 pointer-events-none">
      <div className="pointer-events-auto">
        <FloatingDock
          mobileClassName="translate-y-0"
          items={links}
        />
      </div>
    </div>
  );
}
