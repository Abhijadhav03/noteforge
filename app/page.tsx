import CallToAction from "@/components/call-to-action";
import Features from "@/components/features-2";
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import { ScrollProgress } from "@/components/magicui/scroll-progress";


export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <HeroHeader />
      <HeroSection />
      <Features />
      <CallToAction />
      <FooterSection />
    </main>
  );
}
