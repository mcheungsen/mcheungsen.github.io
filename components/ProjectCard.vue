<script setup lang="ts">
defineProps<{
    p: {
        clickable: boolean
        title: string
        img: string
        icons: string[]
        type: string
        keywords: string[]
        desc: string
        'id-name': string
    }
}>()
</script>

<template>
    <div>
        <UCard class="lg:m-14
      m-5 rounded-sm hover:bg-toast-500/50 transition duration-300" variant="soft" :ui="{
        root: ''
    }">
            <div class="flex flex-col-reverse gap-10 text-kabul-700 hover:text-kabul-900 transition items-center
        lg:flex-row">
                <img :src="p.img" alt=""
                    class="w-[400px] h-[270px] object-cover object-center hover:sepia-50 transition">
                <div class="flex flex-col gap-y-4 items-center
          lg:items-start">
                    <h2 class="text-3xl uppercase">{{ p.title }}</h2>
                    <ul class="flex gap-2">
                        <li v-for="icon in p.icons">
                            <UIcon :name="icon" class="size-5" />
                        </li>
                    </ul>
                    <p class="italic font-light text-sm">{{ p.type }} | {{ p.keywords.join(' - ') }}</p>
                    <p>{{ p.desc }}</p>
                </div>
            </div>
        </UCard>
    </div>
</template>