<template>
    <button class="flex items-center gap-x-2 hover:bg-opacity-80 transition-all hover:ring-2 ring-offset-4 ring-offset-gray-900 active:transform active:scale-105 active:transition-transform">
        <span v-if="text">{{ text }}</span>
        <VIcon class="hover:transform hover:scale-75 hover:transition-transform" v-if="icon" :name="icon" :fill="fill" :stroke="stroke" :w="wIcon" :h="hIcon" />
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import VIcon from '@/components/VIcon.vue'
interface Props {
    text?: string,
    icon?: string,
    fill?: string,
    stroke?: string,
    wIcon?: string,
    hIcon?: string
}
defineProps<Props>();

</script>

<style scoped>

</style>