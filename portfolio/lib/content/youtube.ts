/**
 * The id out of a YouTube URL, or null for anything that is not one.
 *
 * This exists so a card can play a talk in place instead of sending someone
 * to youtube.com and losing them. Thirty-eight entries link to YouTube and
 * none of them needed a data change to get a player: the id is already in the
 * href, so the href is the only honest source for it.
 *
 * Every form the catalogue actually contains, plus the ones it does not yet
 * but will the next time a link is pasted from a phone or from a live stream:
 *
 *   youtube.com/watch?v=ID          the ordinary one
 *   youtu.be/ID                     the share button
 *   youtube.com/live/ID             streams, which is how several hangouts
 *                                   were linked while they were running
 *   youtube.com/shorts/ID
 *   youtube.com/embed/ID
 *
 * A playlist or a channel URL has no single video behind it and returns null,
 * which is the point: the caller then renders a plain cover and a link out
 * rather than an embed of whatever happens to be first in the list.
 */
const HOSTS = new Set([
  'youtube.com',
  'www.youtube.com',
  'm.youtube.com',
  'music.youtube.com',
  'youtube-nocookie.com',
  'www.youtube-nocookie.com',
  'youtu.be',
  'www.youtu.be',
])

/** YouTube ids are exactly eleven characters of URL-safe base64. */
const ID = /^[\w-]{11}$/

const PATH_PREFIXES = ['live', 'shorts', 'embed', 'v']

export function youtubeId(href: string | undefined): string | null {
  if (!href) return null

  let url: URL
  try {
    url = new URL(href)
  } catch {
    return null
  }

  if (!HOSTS.has(url.hostname)) return null

  // youtu.be/ID
  if (url.hostname.endsWith('youtu.be')) {
    const id = url.pathname.slice(1).split('/')[0]
    return ID.test(id) ? id : null
  }

  // watch?v=ID
  const v = url.searchParams.get('v')
  if (v && ID.test(v)) return v

  // live/ID, shorts/ID, embed/ID, v/ID
  const [first, second] = url.pathname.replace(/^\//, '').split('/')
  if (PATH_PREFIXES.includes(first) && second && ID.test(second)) return second

  return null
}

/**
 * The start time in whole seconds from a YouTube URL, or 0.
 *
 * Seventeen of the hangouts are three-hour streams that Jay appears part of
 * the way into. Dropping someone at 00:00 of a stream to find him is not a
 * portfolio, it is homework, so those hrefs carry the timestamp YouTube's own
 * share dialog produces and both the embed and the outbound link honour it.
 *
 * The href is the single source: there is no separate `start` field to fall
 * out of step with the link next to it.
 *
 * YouTube writes `t` three ways and all three appear in links people paste:
 * bare seconds (`t=1789`), seconds suffixed (`t=90s`), and the clock form
 * (`t=1h2m3s`, and `t=29m49s` from the desktop share dialog).
 */
const CLOCK = /^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/

export function youtubeStart(href: string | undefined): number {
  if (!href) return 0

  let raw: string | null
  try {
    raw = new URL(href).searchParams.get('t')
  } catch {
    return 0
  }
  if (!raw) return 0

  if (/^\d+$/.test(raw)) return Number(raw)

  const m = CLOCK.exec(raw)
  // A `t` that matches nothing (or the empty match CLOCK would otherwise
  // accept) is not a reason to start the video anywhere but the beginning.
  if (!m || !(m[1] || m[2] || m[3])) return 0
  return Number(m[1] ?? 0) * 3600 + Number(m[2] ?? 0) * 60 + Number(m[3] ?? 0)
}

/**
 * The embed URL for an id.
 *
 * youtube-nocookie.com rather than youtube.com: nothing is written to the
 * visitor's browser until they press play, which is the whole reason the
 * player sits behind a poster in the first place. `rel=0` keeps the end screen
 * on the same channel instead of offering somebody else's video.
 *
 * `start` rather than `t`: the watch page reads `t`, the iframe player reads
 * `start`, and only `start` is in the player's documented parameter list.
 */
export function youtubeEmbed(id: string, start = 0, autoplay = true): string {
  const params = new URLSearchParams({ rel: '0', modestbranding: '1' })
  if (autoplay) params.set('autoplay', '1')
  if (start > 0) params.set('start', String(start))
  return `https://www.youtube-nocookie.com/embed/${id}?${params}`
}
