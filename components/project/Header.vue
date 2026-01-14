<script setup lang="ts">
const items = [
    [
        {
            label: 'Maeva Cheung-Sen',
            to: '/'
        },
    ],
    [
        {
            label: '',
            icon: 'i-simple-icons-github',
            to: 'https://github.com/mcheungsen',
            target: '_blank'
        },
        {
            icon: 'mdi:linkedin',
            to: 'https://www.linkedin.com/in/ma%C3%ABva-cheung-sen-2352621b9/',
            target: '_blank'
        }
    ]
]
</script>
<template>
    <div>
        <div>
            <UHorizontalNavigation :ui="{ container: 'px-32 py-10', label: 'text-xl' }" :links="items" />
        </div>
    </div>
</template>