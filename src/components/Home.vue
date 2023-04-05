<template>
  <VContainer class="fill-height">
    <VResponsive class="d-flex align-center text-center fill-height">
      <VImg contain height="300" src="@/assets/logo.svg" />

      <h1 class="text-h2 font-weight-bold">Licznik talii kart</h1>

      <VRow class="d-flex align-center justify-center">
        <VCol cols="auto">
          <MyButton color="primary" size="small" text="Przelicz talie">
            <template #append>dodatkowa treść</template>
          </MyButton>
          <DeckInfo :deck=deck />
        </VCol>
      </VRow>
    </VResponsive>
  </VContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MyButton from '@/components/MyButton.vue'
import DeckInfo from '@/components/DeckInfo.vue'

const deck = ref<number>(0)
</script>
