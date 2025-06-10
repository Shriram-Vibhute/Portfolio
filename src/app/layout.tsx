
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
  IconFileText,
  IconBrain, // Added for Kaggle
  IconCode,   // Added for LeetCode
} from "@tabler/icons-react";


export const metadata: Metadata = {
  title: 'Sectionize',
  description: 'Crafting beautiful sections, effortlessly.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = [
    { href: "/", icon: <IconHome className="h-full w-full text-neutral-200 dark:text-white" />, title: "Home" },
    { href: "https://github.com/darshanbhuva", icon: <IconBrandGithub className="h-full w-full text-neutral-200 dark:text-white" />, title: "GitHub" },
    { href: "https://linkedin.com/in/darshanbhuva", icon: <IconBrandLinkedin className="h-full w-full text-neutral-200 dark:text-white" />, title: "LinkedIn" },
    { href: "https://x.com/darshanbhuva", icon: <IconBrandX className="h-full w-full text-neutral-200 dark:text-white" />, title: "X" },
    { 
      href: "https://www.kaggle.com/darshanbhuva", 
      icon: <IconBrain className="h-full w-full text-neutral-200 dark:text-white" />, 
      title: "Kaggle" 
    },
    { 
      href: "https://leetcode.com/darshanbhuva", 
      icon: <IconCode className="h-full w-full text-neutral-200 dark:text-white" />, 
      title: "LeetCode" 
    },
    { href: "mailto:darshanbhuva57@gmail.com", icon: <IconMail className="h-full w-full text-neutral-200 dark:text-white" />, title: "Email" },
    {
      href: "/resume_darshan_bhuva.pdf",
      icon: <IconFileText className="h-full w-full text-neutral-200 dark:text-white" />,
      title: "Resume",
    },
  ];

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 print:hidden">
          <FloatingDock items={navLinks} />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
