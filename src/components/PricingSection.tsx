import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const features = [
  "8 comprehensive video modules",
  "Lifetime access & free updates",
  "Private community access",
  "AI tool guides & templates",
  "Monetization playbook",
  "1-on-1 doubt clearing sessions",
  "Certificate of completion",
  "30-day money-back guarantee",
];

const PricingSection = () => (
  <section id="pricing" className="py-16 md:py-24">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Mastery <span className="text-gradient-accent">Access</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Everything you need to build a profitable AI influencer business
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
        {/* Features */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold mb-6">What's Included:</h3>
          {features.map((f) => (
            <div key={f} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Check size={12} className="text-lavender" />
              </div>
              <span className="text-muted-foreground text-sm">{f}</span>
            </div>
          ))}
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card-hover p-8 md:p-10 text-center relative overflow-hidden premium-shadow"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-lavender to-gold" />
          <Zap size={24} className="text-gold mx-auto mb-4" />
          <p className="text-sm text-muted-foreground mb-2">One-time payment</p>
          <div className="mb-2">
            <span className="text-muted-foreground text-lg line-through mr-2">₹999</span>
          </div>
          <div className="text-5xl md:text-6xl font-bold mb-2">
            <span className="text-gradient-accent">₹299</span>
          </div>
          <p className="text-muted-foreground text-sm mb-8">Limited time offer • 50% OFF</p>
          <a
            href="https://superprofile.bio/vp/master-ai-influencer-course-436"
            className="gold-button text-lg py-4 px-12 inline-block rounded-xl w-full text-center font-bold"
          >
            Enroll Now →
          </a>
          <p className="text-xs text-muted-foreground mt-4">
            7-day money-back guarantee · Instant access
          </p>
        </motion.div>
      </div>
    </div>
    <div className="section-divider" />
  </section>
);

export default PricingSection;
