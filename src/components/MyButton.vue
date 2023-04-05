<template>
  <VBtn :color="color" :size="size">
    Przelicz talie
  </VBtn>
</template>

<script setup lang="ts">
defineProps<{
  color: string
  size: string
}>()
</script>
