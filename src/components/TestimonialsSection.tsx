import { motion } from "framer-motion";
import { Play, TrendingUp, IndianRupee, Bot } from "lucide-react";
import reel1 from "@/assets/reel-1.jpg";
import reel2 from "@/assets/reel-2.jpg";
import reel3 from "@/assets/reel-3.jpg";
import img1 from "@/assets/proof-1.webp";
import img4 from "@/assets/proof-2.webp";
import img6 from "@/assets/proof-3.jpg";

const reels = [reel1, reel2, reel3];
const posts = [img1, img4, img6];

const testimonials = [
  {
    icon: TrendingUp,
    title: "Exponential Growth",
    quote: "I went from 0 to 50K followers in just 3 months using the strategies taught in this course. The AI tools are incredible!",
    author: "Priya S.",
    role: "Course Student",
  },
  {
    icon: IndianRupee,
    title: "Earning Proof",
    quote: "I'm now earning ₹1.5L/month from my AI influencer pages through brand collaborations. This course paid for itself 100x over.",
    author: "Rahul M.",
    role: "Course Student",
  },
  {
    icon: Bot,
    title: "100% Virtual",
    quote: "Nobody can tell my influencer isn't real. The quality of AI content I create now is absolutely mind-blowing. Best investment ever!",
    author: "Ananya K.",
    role: "Course Student",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-16 md:py-24">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Happy <span className="text-gradient-primary">Students</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Real results from our students' AI influencer pages
        </p>
      </motion.div>

      {/* Vertical Image Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {posts.map((src, i) => (
          <motion.div
            key={`post-${i}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card-hover p-1.5 rounded-xl w-full max-w-sm mx-auto"
          >
            <div className="relative aspect-[9/16] rounded-xl overflow-hidden group">
              <img 
                src={src} 
                alt={`Student AI Influencer Result ${i + 1}`} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                loading="lazy"
                decoding="async"
                width={360}
                height={640}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block px-3 py-1 mb-2 text-[10px] font-bold tracking-wider uppercase bg-primary/20 text-lavender rounded-full backdrop-blur-md border border-primary/20">
                  Result
                </span>
                <p className="text-sm text-foreground/90 font-medium line-clamp-2">
                  AI Generated content making lakhs in revenue.
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Testimonial Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card-hover p-6 premium-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <t.icon size={18} className="text-lavender" />
              </div>
              <h3 className="font-semibold text-sm">{t.title}</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed italic">"{t.quote}"</p>
            <div className="text-xs">
              <span className="text-foreground font-medium">{t.author}</span>
              <span className="text-muted-foreground"> · {t.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    <div className="section-divider" />
  </section>
);

export default TestimonialsSection;
