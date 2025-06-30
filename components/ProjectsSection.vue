<script setup lang="ts">

// --- Fetch des deux JSON ----
const { data: technologies, status: loadingTech } =
    await useFetch<Technology[]>('/data/technologies.json', { server: true })

const { data: projects, status: loadingProj } =
    await useFetch<Project[]>('/data/projects.json', { server: true })

// --- Table projet[id] -> Project (mise à jour auto quand projects.value change) ----
const projectMap = computed(() =>
    new Map((projects.value ?? []).map(p => [p.id, p] as const))
)

// --- Helper pour récupérer les techno d’un projet via son id ----
function techFor(id: string): Technology[] {
    const project = projectMap.value.get(id)
    if (!project || !technologies.value) return []

    return project.technologies
        .map(tid => technologies.value!.find(t => t.id === tid))
        .filter((t): t is Technology => !!t)
}
</script>


<template>
    <ClientOnly>
        <div class="min-h-screen p-10">
            <h1 class="text-5xl uppercase text-just-right-800 font-light tracking-widest
        text-center mb-5
        ">Projets</h1>

            <div class="text-justify text-balance">
                <div id="project-athome-solution" class="p-3 m-5 flex flex-col gap-y-5">
                    <!--Titre-->
                    <div>
                        <h2 class="text-3xl font-extralight">Outil de Gestion Interne - Versioning</h2>
                    </div>
                    <!-- Logos -->
                    <div v-if="loadingProj === 'pending' || loadingTech === 'pending'">
                        Chargement des données...
                    </div>
                    <div v-else>
                        <div class="flex gap-5 flex-wrap justify-center">
                            <img v-for="tech in techFor('versioning')" :key="tech.id"
                                :src="`/img/technologies_logo/${tech.image}`" :alt="tech.name"
                                class="w-12 h-12 object-contain" />
                        </div>
                    </div>
                    <!--Texte Présentation-->
                    <div class="indent-5 leading-7 flex flex-col gap-y-3">
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

                </div>
                <div id="Project-Euler"></div>
                <div id="Project-portfolio"></div>
            </div>

        </div>
    </ClientOnly>
</template>