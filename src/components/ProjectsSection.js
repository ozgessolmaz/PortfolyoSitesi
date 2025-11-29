import Section from './Section';

export default function ProjectsSection({ projects }) {
  return (
    <Section
      id="projects"
      eyebrow="Projeler"
      title="Seçtiğim işler ve topluluk çalışmaları"
    >
      <p className="text-sm text-slate-300 md:text-base">
        Full-stack web deneyimlerinden bilgisayarlı görü çözümlerine kadar seçtiğim projeler. Her biri
        kullanıcı ihtiyaçlarına odaklanan gerçek problemleri çözüyor.
      </p>
      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-[1px] shadow-[0_24px_40px_-20px_rgba(14,165,233,0.45)] transition hover:shadow-[0_28px_60px_-20px_rgba(99,102,241,0.55)]"
          >
            <div className="relative z-10 flex h-full flex-col rounded-[23px] bg-slate-950/80 p-8">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/50 bg-sky-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-sky-300">
                  {project.technologies[0] ?? 'Teknoloji'}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  {project.technologies.length} teknoloji
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-white">{project.name}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">{project.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-slate-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-semibold text-sky-300">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-2 transition hover:bg-sky-500/20"
                  >
                    Canlı Demo →
                  </a>
                )}
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition hover:border-sky-400/50 hover:text-sky-200"
                  >
                    Kaynak Kodu →
                  </a>
                )}
                {!project.liveUrl && !project.sourceUrl && (
                  <span className="text-xs font-medium text-slate-400">Linkler yakında eklenecek</span>
                )}
              </div>
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-500/40 via-indigo-500/20 to-purple-600/30 opacity-0 transition duration-500 group-hover:opacity-100" />
          </article>
        ))}
      </div>
    </Section>
  );
}
