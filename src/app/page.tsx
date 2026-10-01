import { Hero } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services-section";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />

      {/* Placeholder — section berikutnya dibangun di Step 3.x dan seterusnya. */}
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-dashed border-border p-10 text-center">
          <p className="text-sm text-muted-foreground">
            Step 2.2 (Layanan) selesai. Section berikutnya menyusul.
          </p>
        </div>
      </div>
    </>
  );
}
