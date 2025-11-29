const gradientBorder =
  'relative rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_60px_-30px_rgba(56,189,248,0.8)] backdrop-blur';

export default function HeroSection({ profile }) {
  const stats = [
    { label: 'Full-stack proje', value: '10+' },
    { label: 'AI/ML deneyi', value: '6' },
    { label: 'Topluluk sunumu', value: '4' },
  ];

  return (
    <section className="relative isolate overflow-hidden pt-48 pb-24 sm:pb-32 sm:pt-56">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/50 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
              {profile.location}
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-4 text-lg font-semibold text-sky-200 sm:text-xl">{profile.title}</p>
            <p className="mt-6 text-base leading-7 text-slate-200 sm:text-lg">{profile.summary}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
              >
                Projelerime göz at
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-100"
              >
                Birlikte çalışalım
              </a>
            </div>
            <ul className="mt-10 flex flex-wrap gap-3">
              {profile.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-200 transition hover:border-sky-400/60 hover:bg-sky-400/10"
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/80 text-[10px] font-semibold text-white">
                    ✓
                  </span>
                  <span className="max-w-[16rem] sm:max-w-none">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className={`${gradientBorder} p-8`}>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-sky-200">
                Sosyal bağlantılar
              </h2>
              <ul className="mt-6 space-y-4 text-sm text-slate-200">
                {profile.socialLinks.map((link) => (
                  <li
                    key={link.url}
                    className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-sky-400/40 hover:bg-sky-400/10"
                  >
                    <div>
                      <p className="font-semibold text-white">{link.platform}</p>
                      <p className="text-xs text-slate-300">{link.username}</p>
                    </div>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold uppercase tracking-wide text-sky-300 hover:text-sky-200"
                    >
                      Profili aç →
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${gradientBorder} grid grid-cols-3 gap-4 p-6 text-center`}>
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white/5 p-4 shadow-inner shadow-black/20">
                  <div className="text-2xl font-semibold text-white">{stat.value}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
