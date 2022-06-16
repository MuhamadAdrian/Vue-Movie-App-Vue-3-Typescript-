<template>
    <div class="absolute h-5 w-5 font-medium rounded-full text-xs flex items-center justify-center">
        <p>{{ text }}</p>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    text: string,
}>()

</script>