const socials = [
  { name: "GitHub", href: "https://github.com/rosexi" },
  { name: "LinkedIn", href: "https://linkedin.com/in/rosexi" },
  { name: "X", href: "https://x.com/rosexi" },
  { name: "Instagram", href: "https://instagram.com/rosexi" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center px-6 py-16 sm:py-24">
      <div className="w-full max-w-2xl flex flex-col min-h-screen">
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Rose Xi
          </h1>
          <p className="mt-2 text-base sm:text-lg text-muted">
            Software engineer, builder, and creative thinker.
          </p>
        </header>

        <main className="mt-10 space-y-4 text-base sm:text-lg leading-relaxed">
          <p>
            Hi, I&apos;m Rose. I love building things that live on the internet
            — from polished products to quick experiments that scratch a creative
            itch.
          </p>
          <p>
            I&apos;m drawn to the intersection of engineering and design: writing
            clean code that ships fast and looks good doing it. Right now
            I&apos;m especially interested in developer tools, AI-native
            interfaces, and making complex systems feel simple.
          </p>
          <p>
            When I&apos;m not coding you&apos;ll probably find me reading,
            exploring a new city, or deep in a rabbit hole about something I
            just discovered.
          </p>
        </main>

        <nav aria-label="Social links" className="mt-10">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-accent"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <footer className="mt-auto pt-16 pb-8 text-sm text-muted">
          &copy; {new Date().getFullYear()} Rose Xi
        </footer>
      </div>
    </div>
  );
}
