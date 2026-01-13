<script setup lang="ts">
import projects from '~/data/projects.json' with { type: 'json' }
</script>

<template>
  <div class="min-h-screen 
  lg:pb-52 lg:px-52 lg:pt-10
  p-5
  ">
    <h1 class="title-section text-center my-10
    lg:m-5
    lg:text-left">Projets</h1>
    <div v-for="p in projects" class="">
      <a :href="p.link">
        <ProjectCard :p="p"/>
      </a>
    </div>
  </div>

</template>
