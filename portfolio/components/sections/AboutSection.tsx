import Link from 'next/link'
import { activeYears, allEntries, PRACTICES } from '@/lib/content'
import { roles, site } from '@/lib/site'

export default function AboutSection() {
  const practices = PRACTICES.map((practice) => ({
    practice,
    count: allEntries.filter((e) => e.practices.includes(practice)).length,
  }))
    .filter((r) => r.count > 0)
    .sort((a, b) => b.count - a.count)

  return (
    <section id="about" className="scroll-mt-20 pt-14 sm:pt-20">
      <h2 className="font-display text-2xl text-text sm:text-3xl">About</h2>

      <div className="prose-body mt-4 max-w-[62ch]">
        {site.intro.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>

      <Link href={site.resume} target="_blank" className="cta-ghost mt-6">
        Download the resume
      </Link>

      {/* Counted from the catalogue rather than asserted. */}
      <div className="mt-14 max-w-xl">
        <div>
          <p className="label mb-3">Practice</p>
          {practices.map((r) => (
            <div key={r.practice} className="flex items-center gap-4 border-b border-line py-2">
              <span className="w-44 shrink-0 text-sm text-text">{r.practice}</span>
              <span
                aria-hidden="true"
                className="h-1 rounded-full bg-accent/70"
                style={{ width: `${(r.count / practices[0].count) * 100}%` }}
              />
              <span className="label ml-auto">{r.count}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="label mt-14 mb-3">Where</p>
      <ul>
        {roles.map((role) => (
          <li key={`${role.org}-${role.period}`} className="grid gap-1 border-t border-line py-5 sm:grid-cols-[9rem_1fr]">
            <span className="label pt-1">{role.period}</span>
            <div>
              <h3 className="font-display text-lg text-text">
                {role.title}
                <span className="text-faint"> · </span>
                {role.href ? (
                  <Link
                    href={role.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-hover"
                  >
                    {role.org}
                  </Link>
                ) : (
                  role.org
                )}
              </h3>
              <p className="mt-1.5 max-w-[62ch] text-sm leading-relaxed text-muted">{role.detail}</p>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-sm text-faint">
        Work here runs {activeYears.first} to {activeYears.last}.
      </p>
    </section>
  )
}
