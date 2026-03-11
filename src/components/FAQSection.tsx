import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need any technical skills or experience to start?",
    a: "No! The course is designed for complete beginners. We guide you step-by-step through every tool and technique you need to create stunning AI influencer content.",
  },
  {
    q: "How long does it take to see results?",
    a: "Most students start seeing meaningful follower growth within 2-4 weeks of implementing our strategies. Monetization typically begins within 2-3 months.",
  },
  {
    q: "Is this legal and ethical?",
    a: "Absolutely. We teach full transparency and disclosure practices. Our module on Ethics & Compliance covers all platform policies and legal requirements.",
  },
  {
    q: "What AI tools will I need?",
    a: "We cover both free and paid tools. You can start with completely free tools and upgrade as you grow. The course covers all major AI image and video generation platforms.",
  },
  {
    q: "Can I really make money with AI influencers?",
    a: "Yes! Our students are earning through brand deals, affiliate marketing, digital products, and sponsored content. The course covers multiple proven monetization strategies.",
  },
  {
    q: "Do I get lifetime access to the course?",
    a: "Yes, you get lifetime access to all course materials including future updates, new modules, and our private community of AI influencer creators.",
  },
];

const FAQSection = () => (
  <section className="py-16 md:py-24">
    <div className="section-container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked <span className="text-gradient-primary">Questions</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="glass-card border rounded-lg px-6 premium-shadow premium-hover">
              <AccordionTrigger className="text-sm font-medium hover:no-underline text-left py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
    <div className="section-divider" />
  </section>
);

export default FAQSection;
