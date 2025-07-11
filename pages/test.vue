<script setup lang="ts">
import projects from '~/data/projects.json' with { type: 'json' }
</script>

<template>
  <ul>
    <li v-for="p in projects" :key="p['id-name']">{{ p.title }}</li>
  </ul>
</template>
