const Footer = () => (
  <footer className="glass-card border-x-0 border-b-0 rounded-none py-12">
    <div className="section-container">
      <div className="grid md:grid-cols-4 gap-8 mb-10">
        <div className="md:col-span-2">
          <h3 className="text-lg font-bold mb-3">
            AI <span className="text-gradient-primary">INFLUENCER</span> MASTERY
          </h3>
          <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
            The most comprehensive course on building, growing, and monetizing AI influencer pages. Join 1,480+ students already earning online.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
          <div className="space-y-2">
            {["Benefits", "Curriculum", "Testimonials", "Pricing"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-4">Legal</h4>
          <div className="space-y-2">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map((l) => (
              <a key={l} href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border pt-6 text-center">
        <p className="text-xs text-muted-foreground">
          © 2026 AI Influencer Mastery. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
