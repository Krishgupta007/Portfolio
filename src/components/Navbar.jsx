import { X, Menu } from "lucide-react";
import { cn } from "./lib/utils";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [IsScrolled, setIsScrolled] = useState(false);
  const [IsMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        IsScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          href="#hero"
          className="text-xl font-bold text-primary flex items-center"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Krish</span>
            Portfolio
          </span>
        </a>
        {/* deaktopNav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((Items, Key) => (
            <a
              href={Items.href}
              key={Key}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {Items.name}
            </a>
          ))}
        </div>

        {/* Mobile Nav */}

        <button
          onClick={() => setIsMobileOpen((prev) => !prev)}
          className="md:hidden text-foreground p-2 z-50"
          aria-label={IsMobileOpen ? "Close menu" : "Open menu"}
        >
          {IsMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 md:hidden flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            IsMobileOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((Items, Key) => (
              <a
                href={Items.href}
                key={Key}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMobileOpen(false)}
              >
                {Items.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
