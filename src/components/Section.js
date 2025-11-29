export default function Section({ id, title, eyebrow, className, children }) {
  const sectionClasses = ['py-16 sm:py-20', 'scroll-mt-24'];
  if (className) {
    sectionClasses.push(className);
  }

  return (
    <section
      id={id}
      className={sectionClasses.join(' ')}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-400">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
