import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import inf1 from "@/assets/influencer-1.webp";
import inf2 from "@/assets/influencer-2.webp";
import inf3 from "@/assets/influencer-3.webp";
import inf4 from "@/assets/influencer-4.webp";
import inf5 from "@/assets/influencer-5.webp";
import inf6 from "@/assets/influencer-6.webp";
import inf7 from "@/assets/influencer-7.webp";
import inf8 from "@/assets/influencer-8.webp";
import inf9 from "@/assets/influencer-9.webp";

const influencers = [
  { img: inf1, name: "Tanvi Joshi", views: "100M+ Views" },
  { img: inf2, name: "Nia Verma", views: "78M+ Views" },
  { img: inf3, name: "Kritika Kapoor", views: "53M+ Views" },
  { img: inf4, name: "Tisha", views: "21M+ Views" },
  { img: inf5, name: "Nysa Nirwan", views: "13.1M Views" },
  { img: inf6, name: "Navreet Chopra", views: "29.2M+ Views" },
  { img: inf7, name: "Bhavna", views: "10.8M Views" },
  { img: inf8, name: "Apoorva Goel", views: "6.2M Views" },
  { img: inf9, name: "Priya Kumari", views: "5.7M Views" },
];

const InfluencerGrid = () => (
  <section className="py-16 md:py-24">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Popular AI Influencer Pages –{" "}
          <span className="text-gradient-accent">Making Lakhs</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Real AI influencer pages created by our students generating massive engagement
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {influencers.map((inf, i) => (
          <motion.div
            key={inf.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="glass-card-hover p-1.5 rounded-xl premium-shadow"
          >
            <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden group">
              <img
                src={inf.img}
                alt={`${inf.name} — AI Generated Influencer Portrait`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
                width={360}
                height={640}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <span className="text-sm font-semibold">{inf.name}</span>
                <span className="flex items-center gap-1 text-xs text-gold">
                  <Eye size={12} /> {inf.views}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    <div className="section-divider" />
  </section>
);

export default InfluencerGrid;
