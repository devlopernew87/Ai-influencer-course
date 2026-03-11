import { useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";

const navLinks = [
  { label: "Benefits", href: "#benefits" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-[36px] left-0 right-0 z-50 glass-card border-x-0 border-t-0 rounded-none">
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="text-xl md:text-2xl font-bold tracking-tight flex items-center gap-2">
          <BookOpen className="w-6 h-6 md:w-7 md:h-7 text-primary" />
          <div>
            <span className="text-foreground">Edu</span>
            <span className="text-gradient-primary">Nova</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-2">
            Login
          </a>
          <a href="#pricing" className="gold-button text-sm py-2 px-5 inline-block rounded-lg">
            Enroll Now
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass-card border-x-0 rounded-none pb-4 px-4">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="block py-3 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="flex gap-3 mt-3">
            <a href="#" className="text-sm text-muted-foreground py-2">Login</a>
            <a href="#pricing" className="gold-button text-sm py-2 px-5 inline-block rounded-lg">Enroll Now</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
