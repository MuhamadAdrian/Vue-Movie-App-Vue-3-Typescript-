<template>
    <div class="px-5 py-2 mr-2 mb-3 rounded-3xl inline-block" :class="[randomBackground]">
        <p class="text-sm">{{ text }}</p>
    </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';

    defineProps<{
        text: string
    }>();

    const randomBackground = computed(() => {
        const background = [
            'bg-indigo-700',
            'bg-yellow-700',
            'bg-emerald-700',
            'bg-blue-700',
            'bg-violet-700',
            'bg-pink-700',
            'bg-rose-700',
            'bg-cyan-700',
            'bg-teal-700',
            'bg-lime-700',
        ];

        const index = Math.floor(Math.random()*background.length);

        return background[index];
    })
</script>