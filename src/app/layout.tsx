import type {Metadata} from 'next';
import './globals.css';
import { BottomNav } from '@/components/bottom-nav';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'MirrorFolio | Personal Portfolio',
  description: 'A personal portfolio website built with Next.js and Firebase Studio.',
  icons: {
    icon: 'https://drive.google.com/uc?export=view&id=1ya67wIF3eFrA3hlYwfj3D4VI4yFqSEPf',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <BottomNav />
        <Toaster />
      </body>
    </html>
  );
}
