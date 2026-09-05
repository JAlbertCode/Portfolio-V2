import SocialIcon from '@/components/SocialIcon'
import { followActions, saveActions, talkActions } from '@/lib/connect'
import type { ConnectAction } from '@/lib/connect'

/**
 * The connect surface, drawn entirely from the direction's tokens so it takes
 * on whichever identity it is placed inside.
 *
 * On a phone this is the first screen, because the phone is most likely in
 * someone's hand ten seconds after Jay handed them a card. On a desktop it
 * folds down into a quieter strip under the hero, where a recruiter reading at
 * a laptop does not need it shouting.
 *
 * Targets are 48px minimum. Someone is doing this one-handed, standing up, in
 * a room full of people.
 */

function Glyph({ name }: { name: string }) {
  if (name === 'contact') {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M15.5 20v-1.5a3.5 3.5 0 0 0-3.5-3.5H7a3.5 3.5 0 0 0-3.5 3.5V20" strokeLinecap="round" />
        <circle cx="9.5" cy="8" r="3.5" />
        <path d="M17 8h5M19.5 5.5v5" strokeLinecap="round" />
      </svg>
    )
  }
  if (name === 'mail') {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <rect x="2.5" y="5" width="19" height="14" rx="2" />
        <path d="m3.5 7 8.5 6 8.5-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (name === 'calendar') {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 3v4M16 3v4" strokeLinecap="round" />
      </svg>
    )
  }
  return <SocialIcon name={name} className="ci" />
}

function Row({ action, primary }: { action: ConnectAction; primary?: boolean }) {
  return (
    <a
      href={action.href}
      {...(action.native ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
      className={primary ? 'cx cx-primary' : 'cx'}
    >
      <span className="cx-icon">
        <Glyph name={action.icon} />
      </span>
      <span className="cx-text">
        <span className="cx-label">{action.label}</span>
        {action.sublabel ? <span className="cx-sub">{action.sublabel}</span> : null}
      </span>
      <svg viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden="true" className="cx-chev">
        <path d="M6 3.5 10.5 8 6 12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}

export default function ConnectBlock() {
  return (
    <section aria-label="Ways to reach Jay" className="cblock">
      <div className="cgrid">
        {saveActions.map((a) => (
          <Row key={a.label} action={a} primary />
        ))}
      </div>

      <div className="cgrid cgrid-2">
        {talkActions.map((a) => (
          <Row key={a.label} action={a} />
        ))}
      </div>

      <div className="cgrid cgrid-follow">
        {followActions.map((a) => (
          <a key={a.label} href={a.href} target="_blank" rel="noopener noreferrer" className="cx cx-compact">
            <span className="cx-icon">
              <Glyph name={a.icon} />
            </span>
            <span className="cx-label">{a.label}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
