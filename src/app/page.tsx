import { Hero } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services-section";
import { WhyJohnDevSection } from "@/components/sections/why-jhondev-section";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyJohnDevSection />

      {/* Placeholder — section berikutnya dibangun di Step 4.x. */}
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-dashed border-border p-10 text-center">
          <p className="text-sm text-muted-foreground">
            Step 3 selesai. Pricing &amp; Kontak menyusul.
          </p>
        </div>
      </div>
    </>
  );
}
