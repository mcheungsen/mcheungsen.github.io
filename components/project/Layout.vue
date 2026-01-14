<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <projectHeader />

    <!-- container IDENTIQUE à ton autre page -->
    <main class="
        w-4/6
        p-5
        md:p-10
        lg:p-5
        xl:px-40
        mx-auto
      ">
      <h1 class="title-section text-center
      xl:mb-14
    lg:m-5
    lg:text-left">{{ title }}</h1>
      <slot />
    </main>
  </div>
</template>
