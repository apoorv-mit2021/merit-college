import HeroSection from "@/components/StudentCounseling/hero-section";
import ServicesSection from "@/components/StudentCounseling/services-section";
import AboutSection from "@/components/StudentCounseling/about-section";
import BenefitsSection from "@/components/StudentCounseling/benefits-section";
import TestimonialsSection from "@/components/StudentCounseling/testimonials-section";
import FAQSection from "@/components/StudentCounseling/faq-section";
import ContactSection from "@/components/StudentCounseling/contact-section";

export default function StudentCounselingPage() {
  return (
    <div className="space-y-12">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
