import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "No PC Required — Build Everything From Your Mobile",
  "Beginner Friendly — No Technical Skills Needed",
  "No Paid Software Required",
  "Complete Step-by-Step Video Tutorials",
  "Course Language: हिंदी (Easy to Understand)",
  "Create Real AI Influencer Pages That Can Go Viral",
  "Instant Access + Lifetime Updates",
  "7-Day Money Back Guarantee"
];

const MobileBenefitsSection = () => {
  return (
    <section className="py-12 md:hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card-hover p-6 rounded-2xl relative overflow-hidden premium-shadow"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-lavender to-gold" />
          
          <h3 className="text-xl font-bold mb-6 text-center">
            Why <span className="text-gradient-primary">Join Now?</span>
          </h3>
          
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 group"
              >
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={12} className="text-lavender" />
                </div>
                <p className="text-sm font-medium text-foreground/90 leading-tight">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="section-divider" />
    </section>
  );
};

export default MobileBenefitsSection;
