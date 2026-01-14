<script setup lang="ts">
import { createPopper } from '#imports';

const techs = [
  'mdi:symfony',
  'mdi:react',
  'mdi:language-typescript',
  'mdi:language-php',
  'simple-icons:mysql'
]

const imgs = [
  '/img/projects/timesheet.png'
]
</script>

<template>
  <projectLayout title="Application TimeSheet">
    <div class="m-5 text-justify flex flex-col gap-y-10 mb-40">
      <div class="flex gap-x-1 mb-5">
        <UBadge v-for="tech in techs" :icon="tech" size="lg" variant="soft"></UBadge>
      </div>
      <p>
        Timesheet est une application RH de saisie et de gestion des temps de travail, développée pour <span
          class="span-highlight">Gasoil
          Productions</span>, dans le cadre d’une collaboration avec <span class="span-highlight">Agilonaute</span>.
        Le projet est né d’un besoin d’automatisation : la saisie des temps était auparavant réalisée manuellement par
        une seule personne, remplissant un fichier excel.

        L’objectif principal était donc de fiabiliser, centraliser et automatiser la gestion des feuilles de temps, tout
        en simplifiant le processus pour les employés comme pour l’administration.
      </p>

      <h2 class="title2-section">Fonctionnement global de l'application</h2>

      <p>
        L'application TimeSheet permet aux salariés de saisir leur temps de travail à tout moment,
        depuis un téléphone ou un ordinateur.
        Chaque feuille de temps correspond à une semaine et suit un cycle de validation clair.
        Une feuille de temps peut avoir plusieurs statuts : brouillon, envoyée, validée, rejetée et verouillée.
      </p>

      <p>
        Lorsqu'un utilisateur saisit ses temps, la feuille de temps est au statut
        <span>brouillon</span>.
        Une fois envoyée, l'utilisateur ne peut plus la modifier ; seul un manager est alors autorisé
        à intervenir.
        Le statut <span>verrouillée</span> empêche toute modification, quel que soit l'utilisateur,
        afin de figer la feuille de temps pour le calcul mensuel des heures et des heures supplémentaires.
      </p>

      <p>
        L'application est divisée en deux sites web distincts : un site salarié et un site de gestion
        destiné aux managers et administrateurs.
        Le site salarié permet à chaque utilisateur de consulter et gérer uniquement ses propres temps.
        Le site de gestion permet de créer et gérer les utilisateurs, les projets et les tâches,
        de consulter et valider les feuilles de temps, ainsi que de générer des exports CSV mensuels
        des temps par utilisateur, utilisés ensuite pour le calcul des salaires et des heures supplémentaires.
      </p>
      <img :src="imgs[0]" alt="">
      <h2 class="title2-section">Stack Technique et architecture</h2>
      <p>
        Le Backend de l'application a été développé avec <span class="span-tech">Symfony</span>, qui constitue
        le coeur de l'architecture et centralise l'ensemble de la logique métier.
        Il permet de structurer l'application autour de controllers, services et processors, tout en assurant
        la gestion de la sécurité et des règles métiers complexes liées à la saisie des temps.</p>

      <p>
        L'API a été construite à l'aide de <span class="span-tech">API Platform</span>, afin de fournir une
        API REST robuste et cohérente, consommée par le frontend.
        Cet outil a permis de mettre en place rapidement des opérations CRUD sur certaines entités,
        tout en offrant la possibilité de personnaliser finement les endpoints pour répondre
        aux besoins métiers spécifiques.
        La persistance des données repose sur <span class="span-tech">Doctrine ORM</span>, utilisé pour la
        modélisation des entités métier et la gestion de leurs relations.
        Doctrine facilite l'interaction avec la base de données <span class="span-tech">MySQL</span> tout en
        garantissant
        la cohérence des donénes et l'intégrité des relations entre les objets.
      </p>
      <p>
        La sécurité de l'application est assurée par un système d'authentification basé sur des <span
          class="span-highlight">tokens JWT</span>.
        Après vérification des identificants et du mot de passe chiffré, un token est généré et utilisé pour sécuriser
        les échanges entre le frontend et le backend.
      </p>
      <p>
        Le Frontend a été développé en <span class="span-tech">React</span> et consomme l'API afin de proposer
        deux interfaces distinctes : une interface salarié et une interface de gestion.
        Le travail collaboratif et le versioning du code sont assurés via <span class="span-tech">Git</span>, hébergé
        sur les serveurs d'Agilonaute, avec un accès sécurisé via un <span class="span-highlight">VPN</span>.
      </p>
      <h2 class="title2-section">Mon Rôle</h2>
      <p>
        J'ai principalement été en charge du <span class="span-highlight">Backend</span> de l'application TimeSheet,
        dans le cadre d'un projet freelance réalisé en équipe de deux avec <span class="span-highlight">Matias Taillade</span>.
        Mon travail a couvert l'ensemble de la logique métier, la sécurité et la modélisation de la base de données.
      </p>
      <p>
        Concrètement, j'ai commencé par la modélisation de la base de données et son implémentation via <span class="span-tech">Doctrine ORM</span>
        et <span class="span-tech">API Platform</span>, ce qui m'a permis de mettre en place rapidement des opérations CRUD sur les entités principales.
      </p>
      <p>
        J'ai ensuite développé toute la logique métier liée à la saisie des temps et au calcul des temps (Gestion des créneaux horaires, fusion de créneaux consécutifs,
        calculs des heures effectives selon le type de contrat, gestion du cycle des feuilles de temps, implémentation de règles métiers spécifiques). J'ai également
        pris en charge toute la sécurité Backend : Implémentation de l'authentification par token JWT, protection des routes selon les rôles et droits
        des utilisateurs, et mise en place de vérification pour s'assurer qu'un utilisateur ne puisse agir que sur ses propres données ou sur celles permises par son rôle.
      </p>
    </div>
  </projectLayout>
</template>