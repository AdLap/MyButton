<template>
  <VCard>
    <VCardTitle>
      Liczba pełnych tali
    </VCardTitle>
    <VCardText>
      Z wylosowanego zbioru można skompletować {{ deck }}
      {{ deck === 1
        ? 'talię'
        : deck < 5 && deck !== 0 ? 'talie' : 'talii ' }} kart </VCardText>
  </VCard>
</template>

<script setup lang="ts">
defineProps<{
  deck: number
}>()
</script>
