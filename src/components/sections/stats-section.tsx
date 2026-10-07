interface StatItem {
  number: string;
  label: string;
  detail: string;
}

const studioStats: StatItem[] = [
  {
    number: "4+",
    label: "Sistem Produksi Aktif",
    detail: "Beroperasi stabil menopang transaksi harian klien.",
  },
  {
    number: "100%",
    label: "Kustomisasi Alur Kerja",
    detail: "Mengikuti proses bisnis Anda, bukan paket template.",
  },
  {
    number: "1.000+",
    label: "Pengguna Terbiasa Memakai",
    detail: "Operator, staf gudang, dan kasir yang telah dilatih.",
  },
  {
    number: "< 24 Jam",
    label: "Waktu Respons & Garansi",
    detail: "Pendampingan langsung tanpa perantara birokrasi.",
  },
];

export function StatsSection() {
  return (
    <section className="bg-white py-14 sm:py-20 border-b border-border/70 relative">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Dark Ink Panel (Lumora Stats Panel) */}
        <div className="relative rounded-3xl bg-brand-navy p-8 sm:p-12 lg:p-16 text-white border border-white/10 shadow-2xl overflow-hidden">
          
          {/* Subtle glow accent */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/15 rounded-full blur-3xl pointer-events-none"
          />

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white/80">
              <span className="size-2 rounded-full bg-brand-lime" />
              <span>Bukti Kinerja</span>
            </div>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Bukti dalam Hasil Kerja, Bukan Sekadar Janji.
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="relative z-10 mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pt-8 border-t border-white/10">
            {studioStats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                  {stat.number}
                </span>
                <span className="mt-2 text-sm sm:text-base font-semibold text-white/90">
                  {stat.label}
                </span>
                <span className="mt-1 text-xs text-white/50 leading-relaxed">
                  {stat.detail}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
