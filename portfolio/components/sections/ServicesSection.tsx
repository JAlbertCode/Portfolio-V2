import Link from 'next/link'
import { isExternal } from '@/lib/content'
import { services } from '@/lib/site'

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 pt-24">
      <h2 className="font-display text-2xl text-text sm:text-3xl">Work with me</h2>
      <p className="mt-4 max-w-[62ch] text-[0.97rem] leading-relaxed text-muted">
        Three ways, deliberately narrow. Each starts with a short conversation about whether I am
        the right person, because the fastest way to waste a budget is to hire someone for the
        wrong problem.
      </p>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {services.map((service, i) => (
          <div key={service.slug} className="flex flex-col border-t border-line pt-4">
            <div className="flex items-baseline gap-3">
              <span className="label">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-display text-lg text-text">{service.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{service.pitch}</p>

            <ul className="mt-4 space-y-1.5">
              {service.deliverables.map((d) => (
                <li key={d} className="flex gap-2.5 text-sm leading-relaxed text-text">
                  <svg
                    width="13"
                    height="13"
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
                  {d}
                </li>
              ))}
            </ul>

            <p className="mt-4 border-l border-line pl-3 text-sm italic text-faint">{service.fit}</p>

            <Link
              href={service.cta.href}
              {...(isExternal(service.cta.href)
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="cta-ghost mt-auto pt-0 mt-6"
            >
              {service.cta.label}
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
