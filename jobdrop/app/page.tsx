import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import CallToAction from "@/components/home/CallToAction";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/home/Footer";
import CategoryGrid from "@/components/home/CategoryGrid";
import RecentJobs from "@/components/home/RecentJobs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoryGrid />
      <HowItWorks />
      <CallToAction />
      <RecentJobs />
      <Testimonials />
    </main>
  );
}
