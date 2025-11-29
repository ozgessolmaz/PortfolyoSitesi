import Section from './Section';

const dateFormatter = new Intl.DateTimeFormat('tr-TR', {
  year: 'numeric',
  month: 'short',
});

function formatDate(value) {
  if (!value) {
    return 'Günümüz';
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }
  return dateFormatter.format(date);
}

export default function ExperienceSection({ experiences }) {
  return (
    <Section
      id="experience"
      eyebrow="Deneyim"
      title="Takımlarla birlikte katma değer üreten işler"
    >
      <p className="text-sm text-slate-300 md:text-base">
        Kurumsal ortamlardan girişim ruhuna uzanan yolculuğumda; kullanıcı deneyimini önceleyen ve ölçeklenebilir
        sistemler inşa etmeye odaklandım.
      </p>
      <div className="relative mt-10 ml-3 border-l border-white/10 pl-6">
        <div className="absolute left-[-0.235rem] top-0 h-3/4 w-[2px] bg-gradient-to-b from-sky-500 to-transparent" />
        <div className="space-y-12">
          {experiences.map((experience) => (
            <article key={experience.id} className="relative pl-6">
              <span className="absolute left-[-43px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-sky-500/40 bg-slate-900 text-xs font-semibold uppercase tracking-wide text-sky-300">
                {experience.company.charAt(0)}
              </span>
              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-[0_20px_40px_-30px_rgba(14,165,233,0.6)] transition hover:border-sky-400/40 hover:bg-white/[0.1]">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-sky-300">
                      {experience.company}
                    </p>
                    <h3 className="text-lg font-semibold text-white sm:text-xl">{experience.role}</h3>
                  </div>
                  <div className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    {formatDate(experience.startDate)} – {formatDate(experience.endDate)}
                  </div>
                </div>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-400">
                  {experience.location}
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
                  {experience.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3">
                      <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
