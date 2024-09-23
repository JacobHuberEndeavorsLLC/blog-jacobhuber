import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* Introduction */}
        <h1 className="text-3xl font-bold text-center sm:text-left">
          Welcome to JacobHuber.me
        </h1>
        <p className="text-lg text-center sm:text-left max-w-lg">
          I&#39;m Jacob, and this is my space for sharing my work and thoughts. Here, you&#39;ll find more about me, my experiences, and a blog where I explore topics I&#39;m passionate about.
        </p>

        {/* Call to Actions (shadcn/ui Buttons) */}
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link href="/about">
            <Button variant="default" size="lg">
              About Me
            </Button>
          </Link>
          <Link href="/resume">
            <Button variant="outline" size="lg">
              Resume
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}