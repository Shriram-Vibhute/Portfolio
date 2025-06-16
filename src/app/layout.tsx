import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: 'Portfolio Hero',
  description: 'A modern portfolio hero section built with Next.js and AI.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300..800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background relative selection:bg-accent selection:text-accent-foreground">
        {/* Dot pattern layer */}
        <div
          className={cn(
            "absolute inset-0 -z-20",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]", 
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]" 
          )}
        />
        {/* Radial gradient mask layer to fade dots at edges */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 -z-10",
            "bg-background", 
            "[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          )}
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
