import FeatureSection from "@/components/LandingPage/feature-section";
import AboutSection from "@/components/LandingPage/about-section";
import ProgramSection from "@/components/LandingPage/program-section";
import WhySection from "@/components/LandingPage/why-section";
import UpcomingEvents from "@/components/LandingPage/upcoming-events-section";
import LatestNewsSection from "@/components/LandingPage/latest-news-section";
import LandingPageHeroSection from "@/components/LandingPage/landing-page-hero";
import Courses from "@/components/APPrep/courses";
import Collaboration from "@/components/LandingPage/collaboration";
import StickyButtonGroup from "@/components/LandingPage/StickyButtonGroup";
import ContactSection from '@/components/Admission/admission-contact-section';
export default function Home() {
    return (
        <div>
            <LandingPageHeroSection/>
            <FeatureSection/>
            <AboutSection/>
            <WhySection/>
            <ProgramSection/>
            <Courses/>
            <UpcomingEvents/>
            <Collaboration/>
            <LatestNewsSection/>
            <ContactSection/>
            <StickyButtonGroup />
        </div>
    );
}