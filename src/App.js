import { useEffect, useMemo, useState } from 'react';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Navbar from './components/Navbar';
import {
  getCertificates,
  getEducation,
  getExperiences,
  getProfile,
  getProjects,
  getSkills,
} from './api';

const initialState = {
  profile: null,
  projects: [],
  experiences: [],
  skills: {},
  education: [],
  certificates: [],
};

function App() {
  const [data, setData] = useState(initialState);
  const [status, setStatus] = useState('loading'); // loading | ready

  useEffect(() => {
    let active = true;

    async function fetchData() {
      const [profile, projects, experiences, skills, education, certificates] = await Promise.all([
        getProfile(),
        getProjects(),
        getExperiences(),
        getSkills(),
        getEducation(),
        getCertificates(),
      ]);

      if (!active) {
        return;
      }

      setData({
        profile,
        projects,
        experiences,
        skills,
        education,
        certificates,
      });
      setStatus('ready');
    }

    fetchData();

    return () => {
      active = false;
    };
  }, []);

  const content = useMemo(() => {
    if (status === 'loading') {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-sky-400 border-t-transparent" />
          <p className="mt-6 text-sm font-medium">Veriler yükleniyor…</p>
        </div>
      );
    }

    return (
      <div id="top" className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-sky-500/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full bg-indigo-600/30 blur-3xl" />
        {data.profile && <Navbar profile={data.profile} />}
        <div className="relative">
          {data.profile && <HeroSection profile={data.profile} />}
          <main className="relative z-10">
            <ProjectsSection projects={data.projects} />
            <ExperienceSection experiences={data.experiences} />
            <EducationSection education={data.education} certificates={data.certificates} />
            <SkillsSection skills={data.skills} />
            <ContactSection />
          </main>
          <footer className="relative z-10 border-t border-white/10 bg-slate-950/60">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-400 sm:flex-row sm:px-6 lg:px-8">
              <p>© {new Date().getFullYear()} Özge Solmaz. Tasarım & geliştirme.</p>
              <nav className="flex gap-4">
                <a className="transition hover:text-sky-400" href="#projects">
                  Projeler
                </a>
                <a className="transition hover:text-sky-400" href="#experience">
                  Deneyim
                </a>
                <a className="transition hover:text-sky-400" href="#education">
                  Eğitim
                </a>
                <a className="transition hover:text-sky-400" href="#skills">
                  Yetenekler
                </a>
                <a className="transition hover:text-sky-400" href="#contact">
                  İletişim
                </a>
              </nav>
            </div>
          </footer>
        </div>
      </div>
    );
  }, [data, status]);

  return content;
}

export default App;

