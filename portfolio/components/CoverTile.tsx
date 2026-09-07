/**
 * What a card shows when the work has no usable image.
 *
 * It is empty on purpose. The first version set the title here, which put the
 * same words twice on one card, three lines apart. Anything else available at
 * this point (the form, the year, the field) is already printed below the
 * tile, so every candidate was the same duplication wearing a different label.
 *
 * So: the card's own ground, held to the same 16:10 as every other tile, which
 * keeps the row of cards level and claims nothing that is not there. Six of the
 * fifty-six entries land here.
 */
export default function CoverTile() {
  return <div className="cover-tile" />
}
