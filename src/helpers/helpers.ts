import { Cards } from "@/type/types"

export const baseDeck: string[] = [
  "WPIK", "WKIE", "WTRE", "WKAR",
  "DPIK", "DKIE", "DTRE", "DKAR",
  "KPIK", "KKIE", "KTRE", "KKAR",
  "APIK", "AKIE", "ATRE", "AKAR",
];

/**
 * @param min 
 * @param max 
 * @returns random number
 */
export const randomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min)

  /**
   * @param cards cards collection
   * @returns Object with sorted collection
   */
export const sortCards = (cards: string[]): Cards => {
  const sortedCards: Cards = {}

  if (!cards) {
    return {}
  }

  cards.forEach((card: string): void => {
    if (!Object.keys(sortedCards).includes(card)) {
      sortedCards[card] = 1
    } else {
      sortedCards[card]++
    }
  })

  return sortedCards
}

/**
 * @param baseDeck deck schema
 * @returns card collection
 */
export const shuffle = (baseDeck: string[]): string[] => {
  const cards: string[] = []
  const totalCards: number = randomNumber(50, 200)

  for (let i = 0; i < totalCards; i++) {
    const index = randomNumber(0, baseDeck.length - 1)
    cards.push(
      baseDeck[index]
    )
  }

  return cards
}
