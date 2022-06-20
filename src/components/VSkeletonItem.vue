<template>
    <div :class="[`h-${h}`]" class="w-full relative bg-gray-800 rounded-2xl p-4 overflow-hidden">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
    withDefaults(defineProps<{
        h?: string
    }
    >(), {
        h: '56'
    })
</script>