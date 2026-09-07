#!/usr/bin/env node
/**
 * Merged pull requests into repositories Jay does not own.
 *
 * The catalogue is ninety-one things Jay made. This is the other half of the
 * record: work that landed inside somebody else's codebase, where the bar is
 * a review by its maintainer rather than his own judgement. Ninety-one entries
 * cannot show that, and sixty-six more entries would bury them, so it is
 * counted rather than listed.
 *
 * `-user:JAlbertCode` is doing the work in that query. Without it the count
 * includes pull requests he opened and merged on his own repositories, which
 * is just a commit with extra steps and would roughly double the number for
 * no added meaning.
 *
 * GitHub's search API is unauthenticated here and rate-limited to ten
 * requests a minute, which is ample: one page covers it until the count
 * passes a hundred.
 *
 *   node scripts/fetch-contributions.mjs > lib/content/contributions.json
 */

const QUERY = 'is:pr is:merged author:JAlbertCode -user:JAlbertCode'
const URL = `https://api.github.com/search/issues?q=${encodeURIComponent(QUERY)}&per_page=100`

const res = await fetch(URL, {
  headers: {
    accept: 'application/vnd.github+json',
    'user-agent': 'jonathanalbert.com-build',
    ...(process.env.GITHUB_TOKEN ? { authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
  },
})
if (!res.ok) {
  console.error(`GitHub returned ${res.status} ${res.statusText}`)
  process.exit(1)
}
const data = await res.json()
if (data.total_count > data.items.length) {
  console.error(
    `Only ${data.items.length} of ${data.total_count} fetched. Add pagination before trusting this.`,
  )
  process.exit(1)
}

const repos = new Map()
for (const it of data.items) {
  const repo = it.repository_url.split('/repos/')[1]
  const merged = it.pull_request.merged_at.slice(0, 10)
  const row = repos.get(repo) ?? { repo, count: 0, first: merged, last: merged }
  row.count += 1
  if (merged < row.first) row.first = merged
  if (merged > row.last) row.last = merged
  repos.set(repo, row)
}

const dates = data.items.map((it) => it.pull_request.merged_at.slice(0, 10)).sort()

console.log(
  JSON.stringify(
    {
      query: QUERY,
      generated: new Date().toISOString().slice(0, 10),
      total: data.items.length,
      repoCount: repos.size,
      first: dates[0],
      last: dates[dates.length - 1],
      repos: [...repos.values()].sort((a, b) => b.count - a.count || a.repo.localeCompare(b.repo)),
    },
    null,
    2,
  ),
)
