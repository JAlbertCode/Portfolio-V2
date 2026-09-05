import type { Metadata } from 'next'
import Link from 'next/link'
import { isExternal } from '@/lib/content'
import { services, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Advisory calls, custom development, and 3D printing. Scoped engagements with a defined deliverable.',
}

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-14 sm:px-8 sm:pt-20">
      <header className="max-w-2xl">
        <p className="label">For teams and individuals</p>
        <h1 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-text sm:text-5xl">
          Work with me
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          Three ways, deliberately narrow. Each one starts with a short conversation to work out
          whether I am the right person, because the fastest way to waste your budget is to hire
          someone for the wrong problem.
        </p>
      </header>

      <div className="mt-16 space-y-5">
        {services.map((service, index) => {
          const external = isExternal(service.cta.href)
          return (
            <section
              key={service.slug}
              id={service.slug}
              aria-labelledby={`${service.slug}-heading`}
              className="grid gap-8 p-6 card sm:grid-cols-[1fr_auto] sm:p-8"
            >
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-faint">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 id={`${service.slug}-heading`} className="font-display text-2xl text-text">
                    {service.title}
                  </h2>
                </div>

                <p className="mt-4 text-base leading-relaxed text-muted">{service.pitch}</p>

                <p className="label mt-7">What you get</p>
                <ul className="mt-3 space-y-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-text">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                        className="mt-1 shrink-0 text-accent"
                      >
                        <path
                          d="M3 8.5l3.5 3.5L13 5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 border-l-2 border-line pl-4 text-sm italic text-faint">
                  {service.fit}
                </p>
              </div>

              <div className="flex flex-col gap-5 sm:w-56 sm:border-l sm:border-line sm:pl-8">
                {service.startingAt ? (
                  <div>
                    <p className="label">Starting at</p>
                    <p className="mt-1 font-display text-2xl text-text">{service.startingAt}</p>
                  </div>
                ) : null}
                <Link
                  href={service.cta.href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="rounded-md bg-accent px-4 py-2.5 text-center text-sm font-medium text-accent-contrast transition-colors hover:bg-accent-hover"
                >
                  {service.cta.label}
                </Link>
              </div>
            </section>
          )
        })}
      </div>

      <section className="mt-16 p-8 card">
        <h2 className="font-display text-2xl text-text">Not sure which of these it is?</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
          That is what the fifteen minutes is for. Describe the problem and I will tell you whether
          it is mine to solve, and who to talk to if it is not.
        </p>
        <Link
          href={site.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-contrast transition-colors hover:bg-accent-hover"
        >
          Book a 15 minute call
        </Link>
      </section>
    </div>
  )
}
