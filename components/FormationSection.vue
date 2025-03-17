<script setup lang="ts">
</script>

<template>
    <div class="min-h-screen p-2">
        <!-- container with vertical line-->
        <div class="">
            <div class="
        space-y-8 relative
        before:w-0.5 before:absolute before:inset-0 before:h-full before:ml-4
        before:bg-gradient-to-b before:from-transparent before:via-just-right-800 before:to-transparent
        ">
                <!-- item -->
                <div class="relative flex items-center gap-x-5">
                    <UButton icon="i-heroicons-light-bulb" size="md" class="rounded-full font-bold"></UButton>
                    <!-- Card -->
                    <UCard class="">
                        <template #header>
                            <div class="flex">
                                <h4>Titre carte</h4>
                                <date>Juillet 2024</date>
                            </div>
                        </template>
                        aaa
                    </UCard>
                </div>
            </div>
        </div>

    </div>
</template>
