
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandCodepen,
  IconMail,
  IconFileText,
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
    { href: "/", icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />, title: "Home" },
    { href: "https://github.com/darshanbhuva", icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />, title: "GitHub" },
    { href: "https://linkedin.com/in/darshanbhuva", icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />, title: "LinkedIn" },
    { href: "https://x.com/darshanbhuva", icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />, title: "X" },
    { href: "https://codepen.io/darshanbhuva", icon: <IconBrandCodepen className="h-full w-full text-neutral-500 dark:text-neutral-300" />, title: "CodePen" },
    {
      href: "#", 
      icon: (
        <span className="flex items-center justify-center h-full w-full text-xs font-semibold text-neutral-500 dark:text-neutral-300">
          Up
        </span>
      ),
      title: "Upwork",
    },
    { href: "mailto:darshanbhuva57@gmail.com", icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />, title: "Email" },
    {
      href: "/resume_darshan_bhuva.pdf",
      icon: <IconFileText className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
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
