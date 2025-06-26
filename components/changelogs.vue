<script setup lang="ts">
  // Assure-toi que le chemin est correct
import changelogData from '~/assets/changelog.json';  // Exemple d'importation du fichier JSON
import type { Changelog } from '~/types/changelog';
import changelogTypes from '~/assets/changelog_types.json'
import { ChangelogTypeEnum } from '~/types/enums';

const changelogs: Changelog[] = changelogData;
</script>


<template>
  <div class="flex flex-col gap-y-5 p-5">
    <div class="flex gap-x-3 items-center py-10">
      <UIcon name="noto:rocket" class="size-10"/>
      <h1 class="text-2xl uppercase font-thin">Changelogs</h1>
    </div>
    <hr>

    <div v-for="changelog in changelogs.slice().reverse()" class="flex flex-col gap-y-3">
      <h2 class="text-xl font-thin underline underline-offset-4">{{ changelog.releaseDate }}</h2>
      <ul class="flex flex-col gap-2">
        <li v-for="(change, index) in changelog.changes" :key="index">
          <UBadge :class="`rounded-full ${changelogTypes[change.type as ChangelogTypeEnum].color}`"
          :icon="changelogTypes[change.type as ChangelogTypeEnum].icon">{{ changelogTypes[change.type as ChangelogTypeEnum].label }}
          </UBadge>
          <p>{{ change.description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>