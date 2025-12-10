import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Services", href: "/bookings" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/sponsors" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* Brand */}
          <div className="space-y-2">
            <Link href="/" className="text-white text-2xl font-bold">
              AK
            </Link>
            <p className="text-sm">
              © {new Date().getFullYear()} AK Company. All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social & Contact */}
          <div className="space-y-4">
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="hover:text-white"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>

            <p className="text-sm">
              Email:{" "}
              <Link
                href="mailto:info@yourdomain.com"
                className="hover:text-white"
              >
                info@yourdomain.com
              </Link>
            </p>

            <p className="text-sm">
              Phone:{" "}
              <Link href="tel:+1234567890" className="hover:text-white">
                +1 (234) 567-890
              </Link>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
