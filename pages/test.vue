<script setup lang="ts">
import { ref } from 'vue'

const items = ref<any[]>([
  
    { label: 'Guide', icon: 'i-lucide-book-open', to: '/getting-started' },
    { label: 'Components', icon: 'i-lucide-box', to: '/components' }
  
])
</script>

<template>
  <UNavigationMenu :items="items" />
</template>

