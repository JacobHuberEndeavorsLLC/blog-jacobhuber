import Link from "next/link";
import { ModeToggle } from "./light-dark-toggle";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">Docs</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">Learn</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">Showcase</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">Blog</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">Analytics</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">Next.js Conf</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">Previews</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">More</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">Next.js Commerce</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">Contact Sales</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">GitHub</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">Releases</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">Telemetry</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">Governance</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">About Vercel</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">Next.js + Vercel</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">Open Source Software</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">GitHub</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">X</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Subscribe to my newsletter</h3>
            <p className="text-sm mb-4">
              Stay updated on new releases and features, guides, and case studies.
            </p>
            <form className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="you@domain.com"
                className="px-4 py-2 w-full bg-input text-sm rounded-md border border-border focus:outline-none"
              />
              <button type="submit" className="bg-primary text-primary-foreground px-4 py-2 rounded-md">
                Subscribe
              </button>
            </form>
          </div>
        </div> */}

{/* <div className="mt-8 flex flex-col md:flex-row justify-between items-center border-t border-border pt-8"> */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center border-border pt-8">
          <p className="text-sm">© 2024 Jacob Huber Endeavors, LLC.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <Link href="https://github.com/JacobHuberEndeavorsLLC" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <GitHubLogoIcon className="h-6 w-6" />
                </Link>
                <ModeToggle /> 
            </div>
        </div>
      </div>
    </footer>
  );
}