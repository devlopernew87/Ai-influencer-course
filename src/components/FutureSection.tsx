import { motion } from "framer-motion";
import { Infinity, EyeOff, TrendingUp } from "lucide-react";

const cards = [
  {
    icon: Infinity,
    title: "Infinite Scalability",
    desc: "Create unlimited AI influencer personas across any niche. Scale your content empire without any physical limitations.",
  },
  {
    icon: EyeOff,
    title: "Total Anonymity",
    desc: "Build a massive following and earn online without ever showing your face or revealing your identity.",
  },
  {
    icon: TrendingUp,
    title: "High ROI Potential",
    desc: "Our students are generating significant revenue through brand deals, affiliate marketing, and sponsored content.",
  },
];

const FutureSection = () => (
  <section id="benefits" className="py-16 md:py-24">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          The Future of <span className="text-gradient-primary">Influence</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover why AI influencers are the next big opportunity in digital marketing
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card-hover p-8 text-center"
          >
            <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
              <c.icon size={28} className="text-lavender" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{c.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FutureSection;
