import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Placeholder — section berikutnya dibangun di Step 1.4 dan seterusnya. */}
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-dashed border-border p-10 text-center">
          <p className="text-sm text-muted-foreground">
            Step 1.3 (Hero) selesai. Section berikutnya menyusul.
          </p>
        </div>
      </div>
    </>
  );
}
