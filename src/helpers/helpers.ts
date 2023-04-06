export const baseCards: string[] = [
  'WPIK', 'WKIE', 'WTRE', 'WKAR',
  'DPIK', 'DKIE', 'DTRE', 'DKAR',
  'KPIK', 'KKIE', 'KTRE', 'KKAR',
  'APIK', 'AKIE', 'ATRE', 'AKAR'
]

export const randomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min)
