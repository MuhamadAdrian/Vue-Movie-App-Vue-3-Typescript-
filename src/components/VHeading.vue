<template>
    <div class="flex items-center justify-between">
        <p class="text-lg font-semibold tracking-wide">{{ title }}</p>
        <router-link v-if="to" :to="to" class="flex items-center gap-x-2 text-gray-400 text-xs">
            <span>All movies</span>
            <VIcon name="chevron-down" w="w-4" h="h-4" class="transform -rotate-90" stroke="currentColor" />
        </router-link>
    </div>
</template>

<script setup lang="ts">
import VIcon from '@/components/VIcon.vue'

interface Props {
    title: string,
    to?: string,
}
withDefaults(defineProps<Props>(), {
    title: 'Title',
});
</script>