<template>
  <VBtn v-bind="config">
    <slot name="loader" />
    <slot name="prepend" />
    <slot />
    <slot name="append" />
  </VBtn>
</template>

<script setup lang="ts">
import type { Button } from '@/type/types'

defineProps<{
  config: Button
}>()
</script>
