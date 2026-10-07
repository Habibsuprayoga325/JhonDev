import { ArrowRight } from "lucide-react";

export function CreateBand() {
  return (
    <section className="bg-white py-8 sm:py-12 border-b border-border/70 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 select-none">
          
          {/* Pill 1: Kami */}
          <div className="group flex items-center justify-center h-22 sm:h-32 rounded-full bg-[#f1f0ee] text-foreground font-semibold text-2xl sm:text-3xl lg:text-4xl transition-all duration-300 hover:scale-[1.02] shadow-2xs hover:bg-[#e8e7e4]">
            <span>Kami</span>
          </div>

          {/* Pill 2: Bangun */}
          <div className="group flex items-center justify-center h-22 sm:h-32 rounded-full bg-gradient-to-br from-brand-blue via-brand-primary to-brand-navy text-white font-semibold text-2xl sm:text-3xl lg:text-4xl transition-all duration-300 hover:scale-[1.02] shadow-md">
            <span>Bangun</span>
          </div>

          {/* Pill 3: Arrow */}
          <div className="group flex items-center justify-center h-22 sm:h-32 rounded-full bg-brand-navy text-white transition-all duration-300 hover:scale-[1.02] shadow-md">
            <ArrowRight className="size-8 sm:size-11 transition-transform group-hover:translate-x-1.5" />
          </div>

          {/* Pill 4: Solusi */}
          <div className="group flex items-center justify-center h-22 sm:h-32 rounded-full border border-border/80 bg-[#f8fafc] text-muted-foreground/60 font-semibold text-2xl sm:text-3xl lg:text-4xl transition-all duration-300 hover:scale-[1.02] hover:text-foreground">
            <span>Solusi</span>
          </div>

        </div>
      </div>
    </section>
  );
}
