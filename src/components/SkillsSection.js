import Section from './Section';

function groupEntries(skills) {
  return Object.entries(skills ?? {});
}

export default function SkillsSection({ skills }) {
  const grouped = groupEntries(skills);

  return (
    <Section id="skills" eyebrow="Yetenekler" title="Teknik yetkinliklerim">
      <p className="text-sm text-slate-300 md:text-base">
        Modern frontend araçlarından Spring Boot mimarisine ve bilgisayarlı görü projelerine uzanan geniş bir
        teknoloji yelpazesi.
      </p>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {grouped.map(([category, skillList]) => (
          <div
            key={category}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900 to-slate-950 p-[1px] shadow-[0_20px_35px_-25px_rgba(14,165,233,0.6)]"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-500/20 via-transparent to-violet-500/20 opacity-0 transition group-hover:opacity-100" />
            <div className="rounded-[26px] bg-slate-950/90 p-7">
              <h3 className="flex items-center justify-between text-lg font-semibold text-white">
                {category}
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  {skillList.length} beceri
                </span>
              </h3>
              <ul className="mt-6 space-y-5">
                {skillList.map((skill) => (
                  <li key={skill.name}>
                    <div className="flex items-center justify-between text-sm font-medium text-slate-200">
                      <span>{skill.name}</span>
                      <span className="text-sky-300">{skill.proficiency}%</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-slate-800">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-sky-500 via-sky-400 to-indigo-500 transition-all"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
