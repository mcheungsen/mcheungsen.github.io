<script setup lang="ts">
const techs = [
    'mdi:language-java',
]
</script>

<template>
    <projectLayout title="Project Euler">
        <div class="m-5 text-justify flex flex-col gap-y-10 mb-40">
            <div class="flex gap-x-1 mb-5">
                <UBadge v-for="tech in techs" :icon="tech" size="lg" variant="soft"></UBadge>
            </div>
        </div>
    </projectLayout>
</template>