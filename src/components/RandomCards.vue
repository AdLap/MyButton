<template>
  <VContainer>
  <h2>Wylosowane karty</h2>
    <VRow>
      <VCol v-for="[key, val] of Object.entries(cards)" :key=key cols="3">
        {{ key }}: {{ val }} szt.
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup lang="ts">
import { Cards } from '@/type/types'

defineProps<{
  cards: Cards
}>()
</script>