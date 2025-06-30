<script setup lang="ts">

const images = import.meta.glob("/public/img/technologies_logo/*", { eager: true })

const logos = Object.keys(images).map((key) => key.replace("/public", ""))

</script>
<template>
    <div class="flex flex-col m-5">
        <div
            class="m-auto items-center w-2/3 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul
                class="flex items-center justify-center md:justify-start [&_img]:max-w-none animate-infinite-scroll">
                <li v-for="logo in logos" class="mx-3">
                    <img :src=logo alt="" draggable="false" class="select-none grayscale hover:grayscale-0 w-[40px] md:w-[100px]">
                </li>
            </ul>
            <ul class="flex items-center justify-center md:justify-start [&_img]:max-w-none animate-infinite-scroll"
                aria-hidden="true">
                <li v-for="logo in logos" class="mx-3">
                    <img :src=logo alt="" class="select-none grayscale hover:grayscale-0 w-[40px] md:w-[100px]" draggable="false">
                </li>
            </ul>
        </div>
    </div>

</template>