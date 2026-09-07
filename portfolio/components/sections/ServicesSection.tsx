import Link from 'next/link'
import { isExternal } from '@/lib/content'
import { services } from '@/lib/site'

/**
 * Three service cards, and the buttons line up.
 *
 * They did not before: each card was as tall as its own content, so the three
 * calls to action finished at three different heights down the page and the
 * row had no baseline. The grid stretches the cards to a common height and the
 * button is pushed to the bottom of each, which is the whole fix.
 */
export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 pt-14 sm:pt-20">
      {/*
        No standfirst. It said every service starts with a short conversation,
        which is not true of the third one: a print request goes to Layerworks
        and gets quoted, with no call in it. It also restated the three buttons
        underneath, which each already name exactly what starts the engagement.
      */}
      <h2 className="font-display text-2xl text-text sm:text-3xl">Services</h2>

      <div className="mt-8 grid items-stretch gap-5 lg:grid-cols-3">
        {services.map((service, i) => (
          <div key={service.slug} className="flex h-full flex-col border-t border-line pt-4">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="label">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-display text-lg text-text">{service.title}</h3>
              {service.org ? <span className="label">{service.org}</span> : null}
              {service.startingAt ? (
                <span className="label ml-auto">from {service.startingAt}</span>
              ) : null}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{service.pitch}</p>

            {service.deliverables?.length ? (
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
            ) : null}

            {service.fit ? (
              <p className="mt-4 border-l border-line pl-3 text-sm italic text-faint">
                {service.fit}
              </p>
            ) : null}

            {/* mt-auto on the wrapper is what puts every button on the same
                line; the padding keeps a gap when the card above is short. */}
            {/* The button is the last thing in every card, which is the only
                reason the three of them line up. The one card with a second
                path puts it above the button rather than below: underneath, it
                pushed that card's button up off the row while the other two
                stayed on the floor. */}
            <div className="mt-auto pt-6">
              {service.secondary ? (
                <Link
                  href={service.secondary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-3 block text-center text-sm text-muted underline-offset-4 hover:text-text hover:underline"
                >
                  {service.secondary.label}
                </Link>
              ) : null}
              <Link
                href={service.cta.href}
                {...(isExternal(service.cta.href)
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="cta-ghost w-full"
              >
                {service.cta.label}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
