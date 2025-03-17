<script setup lang="ts">
const items = [
    'img/profile/profile_4.JPG',
    'img/profile/profile_5.JPG',
]

const carouselProfileRef = ref()

onMounted(() => {
    setInterval(() => {
        if (!carouselProfileRef.value) return

        if (carouselProfileRef.value.page === carouselProfileRef.value.pages) {
            return carouselProfileRef.value.select(0)
        }

        carouselProfileRef.value.next()
    }, 5000)
})
</script>
<template>
    <div class="min-h-screen h-auto rounded-sm bg-just-right-900/70 flex flex-col items-center
    ">
        <div class="items-center flex flex-col w-full p-5 gap-y-5
            md:gap-x-32 md:p-48 md:justify-evenly

            ">
            <div class="md:indent-5 text-just-right-100 text-justify  md:leading-9 self-center md:text-2xl w-2/3 space-y-4
            text-base indent-2 leading-2">
                <p><span class="lg:text-8xl font-extralight font-delius md:text-5xl text-5xl">H</span>ello ! Je m'appelle <span
                        class="underline">Maeva</span> et je suis diplômée d’un master en informatique,
                    spécialité Génie Logiciel.
                    Passionnée par le développement web, j’aime concevoir des applications modernes et ergonomiques en
                    explorant
                    diverses technologies.
                    Basée à Bordeaux/Talence, je suis toujours curieuse d’apprendre et d’expérimenter.
                </p>
                <p>
                    Ce site est mon portfolio, un espace où je regroupe mon parcours, mes projets et mes créations
                    artistiques.
                    Le développement et le dessin occupent une place essentielle dans ma vie :
                    j’aime autant coder une interface élégante que capturer une expression à travers un portrait.Grande
                    amatrice
                    de jeux vidéo et de lecture, j’adore découvrir de nouveaux univers, que ce soit à travers un livre,
                    un jeu
                    ou une œuvre d’art. Toujours en quête d’apprentissage, je m’intéresse aux langues et progresse
                    activement en
                    anglais et en japonais.
                </p>
                <p>
                    À travers ce site, je partage mon parcours, mes inspirations et mes projets.
                    Bienvenue dans mon univers !
                </p>
                <p class="text-kabul-200">Le site étant encore en cours de développement, certaines sections peuvent
                    être
                    incomplètes ou en évolution.</p>
            </div>
            <div class="w-1/2 drop-shadow-none hover:drop-shadow-2xl transition-all duration-300
            md:w-2/6">
                <UCarousel ref="carouselProfileRef" v-slot="{ item }" :items="items"
                    :ui="{ item: 'basis-full hover:grayscale-0 grayscale transition-all duration-600 brightness-110', container: 'rounded-xl' }">
                    <img :src="item" class="w-full" draggable="false" alt="">
                </UCarousel>
            </div>
        </div>
    </div>
</template>