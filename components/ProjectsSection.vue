<script setup lang="ts">
const tech_versioning: string[] = ["NUXT.svg", "symfony.png", "apiplatform.svg", "MySQL.svg", "doctrine.svg", "TAILWIND.svg", "HTML5.png", "TS.svg"]
</script>


<template>
    <div class="min-h-screen p-10">
        <h1 class="text-5xl uppercase text-just-right-800 font-light tracking-widest
        text-center mb-5
        ">Projets</h1>

        <div class="text-kabul-950 text-justify text-balance xl:px-60 md:text-xl py-10
        indent-5 [&_p]:leading-8">
            <div id="project-athome-solution" class="p-3 m-5 flex flex-col gap-y-5">
                <!--Titre-->
                <div>
                    <h2 class="text-3xl font-extralight">Outil de Gestion Interne - Versioning</h2>
                </div>
                <!-- Logos -->
                <div class="flex gap-5 flex-row flex-wrap justify-center xl:justify-start">
                    <img v-for="img in tech_versioning" :src="'/img/technologies_logo/' + img"
                        class="w-10 hover:grayscale" />
                </div>
                <!--Texte Présentation-->
                <div class="flex flex-col gap-20 lg:flex-row items-center">
                    <div class="flex flex-col gap-y-3 basis-3/5">
                        <p class="">
                            Dans le cadre de mon stage de fin d'études chez Athome Solution,
                            j’ai développé une application web
                            interne destinée à centraliser les informations liées aux
                            <span
                                class="text-just-right-900 font-semibold hover:text-just-right-500 transition duration-300">métadonnées
                                des projets logiciels</span>,
                            dans le but de faciliter la gestion des mises à jour et la sécurité des projets.
                        </p>
                        <p class="">

                            J’ai conçu et modélisé <span
                                class="text-just-right-900 font-semibold hover:text-just-right-500 transition duration-300">la
                                base de données</span>, créé une <span
                                class="text-just-right-900 font-semibold hover:text-just-right-500 transition duration-300">API
                                interne</span> avec Symfony, et développé
                            un
                            <span
                                class="text-just-right-900 font-semibold hover:text-just-right-500 transition duration-300">frontend
                                dynamique</span> avec <span
                                class="underline underline-offset-4 decoration-just-right-500">Nuxt.js</span>.
                            L’application
                            repose sur une stack moderne incluant
                            <span class="underline underline-offset-4 decoration-just-right-500">MySQL,
                                Symfony et Nuxt</span>.
                        </p>
                        <p class="">
                            Ce projet m’a permis d’appréhender une <span
                                class="text-just-right-900 font-semibold hover:text-just-right-500 transition duration-300">architecture
                                logicielle complète</span>, d'améliorer mes
                            compétences en développement fullstack, et de renforcer ma capacité à concevoir des
                            solutions
                            techniques adaptées à <span
                                class="text-just-right-900 font-semibold hover:text-just-right-500 transition duration-300">un
                                besoin métier réel</span>.
                        </p>
                    </div>
                    <div class="basis-2/5">
                            <img src="/img/projects/versioning.png" alt="illustration projet versioning"
                                class="transition duration-300 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] 
                    hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                    <span class="text-xs italic text-just-right-300">Confidentialité : Illustration fictive</span>

                    </div>
                </div>

            </div>
            <div id="Project-Euler"></div>
            <div id="Project-portfolio"></div>
        </div>

    </div>
</template>