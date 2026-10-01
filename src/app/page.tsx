import { Hero } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services-section";
import { WhyJohnDevSection } from "@/components/sections/why-jhondev-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { pricingTiers } from "@/lib/pricing-data";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyJohnDevSection />
      <PricingSection tiers={pricingTiers} />

      {/* Placeholder — section Kontak dibangun di Step 4.4–4.7. */}
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-dashed border-border p-10 text-center">
          <p className="text-sm text-muted-foreground">
            Step 4.1–4.3 (Harga) selesai. Kontak menyusul.
          </p>
        </div>
      </div>
    </>
  );
}
