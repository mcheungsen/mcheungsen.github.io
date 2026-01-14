<script setup lang="ts">
import { ref } from 'vue';
import NameSection from '~/components/NameSection.vue';
import ProfileSection from '~/components/ProfileSection.vue';
import ProjectsSection from '~/components/ProjectsSection.vue';
import TechnoSection from '~/components/technoSection.vue';

const items = [
  [
    {
      label: 'A propos de moi',
      icon: 'i-lucide-book-open',
      to: '#profile-section'
    },
    {
      label: 'Mes Projets',
      icon: '',
      to: '#projects-section'
    }
  ],
  [
    {
      label: '',
      icon: 'i-simple-icons-github',
      to: 'https://github.com/mcheungsen',
      target: '_blank'
    },
    {
      icon:'mdi:linkedin',
      to: 'https://www.linkedin.com/in/ma%C3%ABva-cheung-sen-2352621b9/',
      target: '_blank'
    }
  ]
]

</script>

<template>
  <div class="cursor-default">
    <NameSection />
    <UHorizontalNavigation :links="items" class="w-full px-32" :ui="{label:'truncate relative text-xl', base:'px-3'}"/>
    <ProfileSection id="profile-section" />
    <TechnoSection />
    <ProjectsSection id="projects-section" />
  </div>
</template>
