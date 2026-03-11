import Navbar from "@/components/Navbar";
import CountdownBanner from "@/components/CountdownBanner";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import MobileBenefitsSection from "@/components/MobileBenefitsSection";
import FutureSection from "@/components/FutureSection";
import CurriculumSection from "@/components/CurriculumSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InfluencerGrid from "@/components/InfluencerGrid";
import FAQSection from "@/components/FAQSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <CountdownBanner />
    <Navbar />
    <HeroSection />
    <OverviewSection />
    <MobileBenefitsSection />
    <FutureSection />
    <CurriculumSection />
    <TestimonialsSection />
    <InfluencerGrid />
    <FAQSection />
    <PricingSection />
    <Footer />
  </div>
);

export default Index;
