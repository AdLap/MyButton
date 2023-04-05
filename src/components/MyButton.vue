<template>
  <VBtn :color="color" :size="size">
    {{ text }}
  </VBtn>
</template>

<script setup lang="ts">
defineProps<{
  color: string
  size: string
  text: string
}>()
</script>
