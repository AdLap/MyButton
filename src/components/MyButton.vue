<template>
  <VBtn :color="color" :size="size">
    <slot name="prepend" />
    <slot />
    <slot name="append" />
  </VBtn>
</template>

<script setup lang="ts">
defineProps<{
  color: string
  size: string
}>()
</script>
