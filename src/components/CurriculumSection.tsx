import { motion } from "framer-motion";
import { Sparkles, Camera, Palette, Users, BarChart3, DollarSign, Shield, Rocket } from "lucide-react";

const modules = [
  { icon: Sparkles, title: "Module 1: AI Character Creation", desc: "How to create a hyper-realistic AI character." },
  { icon: Camera, title: "Module 2: AI Photoshoots", desc: "How to Create Professional Photoshoot Images Using AI." },
  { icon: Palette, title: "Module 3: Influencer Basics", desc: "Understanding the basics of becoming a digital influencer." },
  { icon: Users, title: "Module 4: Viral Reels", desc: "Creating viral Instagram Reels and short-form content." },
  { icon: BarChart3, title: "Module 5: Captions & Hooks", desc: "Writing engaging captions and hooks that attract followers." },
  { icon: DollarSign, title: "Module 6: AI Content Creation", desc: "Using AI tools to generate content quickly." },
  { icon: Shield, title: "Module 7: Image to Video AI", desc: "How to convert an image into a video like viral videos on Instagram." },
  { icon: Rocket, title: "Module 8: Scaling & Automation", desc: "Automate your workflow and scale to multiple AI influencer accounts simultaneously." },
];

const CurriculumSection = () => (
  <section id="curriculum" className="py-16 md:py-24">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Comprehensive <span className="text-gradient-primary">Curriculum</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          8 in-depth modules covering everything you need to build a profitable AI influencer business
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {modules.map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-card-hover p-6 premium-shadow"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <m.icon size={20} className="text-lavender" />
            </div>
            <h3 className="font-semibold mb-2 text-sm">{m.title}</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
    <div className="section-divider" />
  </section>
);

export default CurriculumSection;
