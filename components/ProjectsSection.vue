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
    <div class="">
      <UCard v-for="p in projects" class="lg:m-14
      m-5 rounded-sm hover:bg-toast-500/50 transition duration-300" variant="soft" :ui="{
        root:''
      }">
        <div class="flex flex-col-reverse gap-10 text-kabul-700 hover:text-kabul-900 transition items-center
        lg:flex-row">
          <img :src="p.img" alt="" class="w-[400px] h-[270px] object-cover object-center hover:sepia-50 transition">
          <div class="flex flex-col gap-y-4 items-center
          lg:items-start">
            <h2 class="text-3xl uppercase">{{ p.title }}</h2>
            <ul class="flex gap-2"> 
              <li v-for="icon in p.icons"><UIcon :name="icon" class="size-5" /></li>
            </ul>
            <p class="italic font-light text-sm">{{ p.type }} | {{ p.keywords.join(' - ') }}</p>
            <p>{{ p.desc }}</p>
          </div>
        </div>
      </UCard>
    </div>
  </div>

</template>
