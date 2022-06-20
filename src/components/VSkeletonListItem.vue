<template>
    <div class="mb-12">
        <div class="flex items-end justify-between">
            <div class="h-10 rounded-3xl w-36 bg-gray-800"></div>
            <div class="h-6 rounded-3xl w-36 bg-gray-800"></div>
        </div>
        <div class="grid gap-x-4 grid-cols mt-4" :class="[`grid-cols-${column}`]">
            <div v-for="index in Number(column)" :key="index">
                <VSkeletonItem />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import VSkeletonItem from '@/components/VSkeletonItem.vue'
withDefaults(defineProps<{
    column?: string
}>(), {
    column: '1'
}) 

</script>