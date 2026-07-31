import { HeroSection } from "@/components/home/HeroSection";
import { TrustIndicators } from "@/components/home/TrustIndicators";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { ComboOffers } from "@/components/home/ComboOffers";
import { WhyMillets } from "@/components/home/WhyMillets";
import { StorySection } from "@/components/home/StorySection";
import { Newsletter } from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustIndicators />
      <FeaturedCategories />
      <ComboOffers />
      <WhyMillets />
      <StorySection />
      <Newsletter />
    </>
  );
}
