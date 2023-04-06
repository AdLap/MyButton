<template>
  <VContainer class="fill-height">
    <VResponsive class="d-flex align-center text-center fill-height">
      <VImg contain height="300" src="@/assets/logo.svg" />

      <h1 class="text-h2 font-weight-bold">Licznik talii kart</h1>

      <VRow class="d-flex align-center justify-center">
        <VCol cols="auto">
          <MyButton color="primary" size="small" text="Przelicz talie" @click="deckCount(baseCards, baseCards)">
            <template #append>dodatkowa treść</template>
          </MyButton>
          <MyButton color="secondary" size="small" text="Wylosuj karty" @click="shuffle" />
          <DeckInfo :deck=deck />
        </VCol>
      </VRow>
    </VResponsive>
  </VContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { randomNumber, baseCards } from '@/helpers/helpers.js'
import type { Cards } from '@/type/types'
import MyButton from '@/components/MyButton.vue'
import DeckInfo from '@/components/DeckInfo.vue'

const deck = ref<number>(0)

const shuffle = (): string[] => {
  const cards: string[] = []
  const totalCards: number = randomNumber(20, 50)

  return cards
}

const cards = ref<string[]>([])

const deckCount = (cards: string[], baseCards: string[]): void => {
  let deckNumber = 0
  const sortedCards: Cards = {}

  // card sorting
  cards.forEach((card: string): void => {
    if (!Object.keys(sortedCards).includes(card)) {
      sortedCards[card] = 1
    } else {
      sortedCards[card]++
    }
  })

  // checking that at least one collection is complete
  if (Object.keys(cards).length < baseCards.length) {
    deck.value = 0
    return
  }

  // check the number of complete collections
  for (let val of Object.values(sortedCards)) {
    if (val > 0) {
      deckNumber = val
    }
    if (val <= deckNumber && val > 0) {
      deckNumber = val
    }
  }
  deck.value = deckNumber
}
</script>
