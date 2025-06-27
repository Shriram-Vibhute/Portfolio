import Link from "next/link";
import { Mountain } from "lucide-react";

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <Link href="#" className="flex items-center justify-center" prefetch={false}>
        <Mountain className="h-6 w-6" />
        <span className="sr-only">MirrorFolio</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href="#about"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="#experience"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Experience
        </Link>
      </nav>
    </header>
  );
}
