import { ThemeToggle } from "@/components/theme-toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import clsx from "clsx";

export default function Footer() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/resume", label: "Resume" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/jacobhuberendeavorsllc",
      icon: faGithub,
      label: "GitHub",
    },
    {
      href: "mailto:hello@jacobhuber.me",
      icon: faEnvelope,
      label: "Email",
    },
    {
      href: "https://x.com/cobmin",
      icon: faXTwitter,
      label: "Twitter",
    },
  ];

  return (
    <footer className="py-8 lg:py-16 bg-muted text-muted-foreground">
      <div className="container max-w-4xl mx-auto flex justify-between items-start flex-wrap gap-10 mb-6 xl:mb-10 px-4">
        {/* Logo / Copyright */}
        <div>
          <p className="text-sm md:text-base">
            © {new Date().getFullYear()} Jacob Huber Endeavors, LLC.
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-sm md:text-base max-md:w-full">
          {links.map((link) => (
            <li key={link.href} className="mb-3.5">
              <Link
                href={link.href}
                className={clsx(
                  "hover:text-primary transition-colors",
                  "focus:text-primary outline-none"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="container max-w-4xl mx-auto text-sm flex max-lg:flex-col gap-10 justify-between px-4">
        {/* Footer Information */}
        <div className="flex flex-col max-md:gap-5 font-light">
          <p>
            For more details, please see{" "}
            <Link
              href="/terms-and-policies"
              target="_blank"
              rel="noreferrer"
              className="text-primary outline-none focus:ring focus:ring-primary"
            >
              Terms and Policies
            </Link>
            .
          </p>
        </div>

        {/* Social Icons and Theme Toggle */}
        <div className="flex items-center space-x-6">
          {socialLinks.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:text-primary transition-colors"
            >
              <FontAwesomeIcon icon={icon} className="w-5 h-5" />
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}