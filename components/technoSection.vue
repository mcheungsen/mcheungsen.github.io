<script setup lang="ts">

const images = import.meta.glob("/public/img/technologies_logo/*", { eager: true })

const logos = Object.keys(images).map((key) => key.replace("/public", ""))
console.log(logos)

</script>
<template>
    <div class="flex flex-col ">
        <div
            class="m-auto items-center w-2/3 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul
                class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                <li v-for="logo in logos">
                    <img :src=logo alt="" width="100px" draggable="false" class="select-none">
                </li>
            </ul>
            <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                aria-hidden="true">
                <li v-for="logo in logos">
                    <img :src=logo alt="" width="100px" class="select-none" draggable="false">
                </li>
            </ul>
        </div>
    </div>

</template>