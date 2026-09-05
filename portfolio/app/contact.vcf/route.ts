import { buildVCard } from '@/lib/connect'

/**
 * Served at /contact.vcf so a business card tap can put Jay straight into
 * someone's phone. The Content-Disposition is `inline` rather than
 * `attachment`: on iOS that is what makes Safari open the add-contact sheet
 * instead of dropping a file into Downloads.
 */
export function GET() {
  return new Response(buildVCard(), {
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': 'inline; filename="jonathan-albert.vcf"',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
