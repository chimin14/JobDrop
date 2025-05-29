import HeroSection from "@/app/components/home/HeroSection";
import HowItWorks from "@/app/components/home/HowItWorks";
import CallToAction from "@/app/components/home/CallToAction";
import Testimonials from "@/app/components/home/Testimonials";
import Footer from "@/app/components/home/Footer";
import CategoryGrid from "@/app/components/home/CategoryGrid";
import RecentJobs from "@/app/components/home/RecentJobs";

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
