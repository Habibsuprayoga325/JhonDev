import { Hero } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services-section";
import { WhyJohnDevSection } from "@/components/sections/why-jhondev-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ContactSection } from "@/components/sections/contact-section";
import { pricingTiers } from "@/lib/pricing-data";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyJohnDevSection />
      <PricingSection tiers={pricingTiers} />
      <ContactSection />
    </>
  );
}
