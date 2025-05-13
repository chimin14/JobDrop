import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HowItWorks />
      <CallToAction />
      <Testimonials />
      <Footer />
    </main>
  );
}
