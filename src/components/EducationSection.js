import Section from './Section';

export default function EducationSection({ education, certificates }) {
  return (
    <Section
      id="education"
      eyebrow="Eğitim"
      title="Eğitim ve programlar"
    >
      <p className="text-sm text-slate-300 md:text-base">
        Devam eden yüksek lisans programım, lisans eğitimim ve teknik odaklı eğitim programlarından seçmeler.
      </p>
      <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          {education.map((item) => (
            <article
              key={item.id}
              className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-[0_20px_40px_-30px_rgba(14,165,233,0.6)]"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-300">
                    {item.institution}
                  </p>
                  <h3 className="text-lg font-semibold text-white sm:text-xl">{item.degree}</h3>
                  {item.field && (
                    <p className="mt-1 text-sm text-slate-200">
                      {item.field}
                    </p>
                  )}
                  {item.school && (
                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">
                      {item.school}
                    </p>
                  )}
                </div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  {item.period}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-[0_20px_40px_-30px_rgba(129,140,248,0.7)]">
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
            Programlar & Sertifikalar
          </h3>
          <ul className="mt-6 space-y-4">
            {certificates.map((cert) => (
              <li
                key={cert.id}
                className="flex flex-col justify-between gap-1 rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm text-slate-200 sm:flex-row sm:items-center"
              >
                <div>
                  <p className="font-medium text-white">{cert.name}</p>
                  <p className="text-xs text-sky-300">{cert.issuer}</p>
                </div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  {cert.period}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

