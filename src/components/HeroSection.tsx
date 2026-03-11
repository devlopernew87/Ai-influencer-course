import { motion } from "framer-motion";
import { Star, Users, Eye } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import heroImg from "@/assets/hero-influencer.webp";

const AnimatedStat = ({ icon: Icon, value, suffix, label, divisor = 1 }: { icon: typeof Users; value: number; suffix: string; label: string; divisor?: number }) => {
  const { count, ref } = useCountUp(value, 2000);
  const display = divisor > 1 ? (count / divisor).toFixed(1) : count.toLocaleString();
  return (
    <div ref={ref as React.Ref<HTMLDivElement>} className="flex items-center gap-2 text-sm text-muted-foreground">
      <Icon size={16} className="text-lavender" />
      <span>{display}{suffix} {label}</span>
    </div>
  );
};

const HeroSection = () => (
  <section className="relative overflow-hidden pt-36 md:pt-44 pb-16 md:pb-24">
    <div className="section-container relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block glass-card px-4 py-1.5 text-xs font-medium text-lavender mb-6">
            🚀 The #1 AI Influencer Course
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Create Your Own{" "}
            <span className="text-gradient-primary">AI Influencer</span>{" "}
            & Start Earning ₹50k-₹5L+ Month Without Showing Your Face
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-lg">
            Learn to build, grow, and monetize ultra-realistic AI influencer pages from scratch — no face, no camera, no limits.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <a href="#pricing" className="gold-button text-base py-3 px-8 inline-block rounded-lg">
              Enroll Now
            </a>
            <a href="#overview" className="glass-button text-base">
              View Course
            </a>
          </div>
          <div className="flex flex-wrap gap-6">
            <AnimatedStat icon={Users} value={1480} suffix="+" label="Students" />
            <AnimatedStat icon={Star} value={49} suffix="" label="Rating" divisor={10} />
            <AnimatedStat icon={Eye} value={315} suffix="M+" label="Combined Views" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex justify-center z-10"
        >
          <div className="relative w-72 md:w-80 lg:w-96">
            <div className="glass-card p-2 rounded-2xl">
              <img
                src={heroImg}
                alt="AI Generated Influencer"
                className="w-full rounded-xl object-cover aspect-[3/4]"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-card px-4 py-2 text-xs font-semibold text-gold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              100% AI Generated
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    <div className="section-divider" />
  </section>
);

export default HeroSection;
