import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import overviewVideo from "../assets/Quick-overview.mp4";

const OverviewSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <section id="overview" className="py-16 md:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Course <span className="text-gradient-primary">Quick Overview</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get a sneak peek into what you'll learn inside AI Influencer Mastery
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card-hover p-2 rounded-2xl group premium-shadow">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-secondary">
              {!isPlaying && (
                <div
                  className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer bg-gradient-to-br from-[#1A1A2E] to-[#05050F]"
                  onClick={handlePlay}
                >
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 premium-hover">
                    <Play size={32} className="text-lavender ml-1" fill="currentColor" />
                  </div>
                  <p className="absolute bottom-6 left-6 text-sm text-muted-foreground">
                    Watch the full course introduction
                  </p>
                </div>
              )}

              <video
                ref={videoRef}
                src={overviewVideo}
                className="w-full h-full object-cover relative z-10"
                controls={isPlaying}
                onPlay={() => setIsPlaying(true)}
                preload="none"
                playsInline
              />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="section-divider" />
    </section>
  );
};

export default OverviewSection;
