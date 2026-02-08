const socials = [
  { name: "GitHub", href: "https://github.com/rosexi" },
  { name: "LinkedIn", href: "https://linkedin.com/in/rosexi" },
  { name: "X", href: "https://x.com/aurochsandroses" },
  { name: "Instagram", href: "https://instagram.com/ma.fioso" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-16 sm:py-24">
      <div className="w-full max-w-2xl">
        <header className="animate-fade-up" style={{ "--delay": "0s" } as React.CSSProperties}>
          <img
            src="/profile.png"
            alt="Rose Xi"
            className="mb-6 h-24 w-24 rounded-full object-cover"
          />
          <h1 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight leading-tight">
            Rose Xi
          </h1>
          <p className="mt-2 text-base sm:text-lg text-muted italic">
            Software engineer, builder, and creative thinker.
          </p>
        </header>

        <main
          className="animate-fade-up mt-10 space-y-4 text-base sm:text-lg leading-relaxed"
          style={{ "--delay": "0.15s" } as React.CSSProperties}
        >
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

        <hr
          className="animate-fade-up mt-10 border-t border-muted/30"
          style={{ "--delay": "0.3s" } as React.CSSProperties}
        />

        <nav
          aria-label="Social links"
          className="animate-fade-up mt-10"
          style={{ "--delay": "0.35s" } as React.CSSProperties}
        >
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-muted transition-colors hover:text-accent"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </div>
  );
}
