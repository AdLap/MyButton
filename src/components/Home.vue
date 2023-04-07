<template>
  <VContainer class="fill-height">
    <VResponsive class="d-flex align-start text-center fill-height">
      <VImg contain height="300" src="@/assets/logo.svg" />

      <h1 class="text-h2 font-weight-bold my-6">Licznik talii kart</h1>

      <VRow class="d-flex align-center justify-center">
        <VCol cols="auto">
          <MyButton :config="{color: 'primary', size: 'small'}" @click="deckCount(randomCards, baseDeck)">
            Przelicz talie
            <template #append>(jeśli masz co liczyć &#128521;)</template>
          </MyButton>
          <MyButton :config="{color: 'secondary', size: 'small'}" @click="shuffleCards(baseDeck)">
            Wylosuj karty
          </MyButton>
          <DeckInfo :deck=deck class="my-10" />
        </VCol>
      </VRow>

      <RandomCards :cards="sorted"/>
    </VResponsive>
  </VContainer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { baseDeck, sortCards, shuffle } from '@/helpers/helpers.js'
import MyButton from '@/components/MyButton.vue'
import DeckInfo from '@/components/DeckInfo.vue'
import RandomCards from '@/components/RandomCards.vue'

const deck = ref<number>(0)
const randomCards = ref<string[]>([])
const sorted = computed(() => sortCards(randomCards.value))

const shuffleCards = (baseDeck: string[]): void => {
  randomCards.value = []
  const newCards = shuffle(baseDeck)
  randomCards.value = [...newCards]
}

/**
 * @param cards cards to sort
 * @param baseDeck deck schema
 */
const deckCount = (cards: string[], baseDeck: string[]): void => {
  let deckNumber = 0
  const sortedCards = sorted.value

  // checking that at least one collection is complete
  if (cards === undefined || Object.keys(cards).length < baseDeck.length) {
    deck.value = 0
    return
  }

  // check the number of complete collections
  for (let val of Object.values(sortedCards)) {
    if (deckNumber === 0 && val > 0) {
      deckNumber = val
    }
    if (val <= deckNumber && val > 0) {
      deckNumber = val
    }
  }
  deck.value = deckNumber
}
</script>
