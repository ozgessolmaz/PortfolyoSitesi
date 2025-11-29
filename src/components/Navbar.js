export default function Navbar({ profile }) {
  const links = [
    { href: '#projects', label: 'Projeler' },
    { href: '#experience', label: 'Deneyim' },
    { href: '#education', label: 'Eğitim' },
    { href: '#skills', label: 'Yetenekler' },
    { href: '#contact', label: 'İletişim' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <nav className="mt-6 flex items-center justify-between rounded-2xl border border-white/20 bg-white/60 px-6 py-4 text-sm font-medium text-slate-600 shadow-xl backdrop-blur-lg dark:bg-slate-900/70 dark:text-slate-200">
          <a href="#top" className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            {profile?.name ?? 'Portfolyo'}
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden rounded-full bg-slate-900 px-4 py-2 text-white shadow-sm transition hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 md:inline-flex"
          >
            İletişime geç
          </a>
        </nav>
      </div>
    </header>
  );
}

