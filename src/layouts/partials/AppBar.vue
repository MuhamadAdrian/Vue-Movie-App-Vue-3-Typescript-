<template>
    <header class="px-16 py-8 w-full border-b border-gray-800 sticky top-0 z-50 bg-gray-900/30 backdrop-blur">
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-x-20">
                <h1 class="text-xl tracking-widest font-bold">MOVEA</h1>
                <ul class="flex items-center gap-x-5">
                    <li @click="$router.push({name: 'home'})" class="cursor-pointer text-gray-400 hover:text-white transition-colors">Movies</li>
                    <li class="cursor-pointer text-gray-400 hover:text-white transition-colors">Tv Shows</li>
                    <li class="cursor-pointer text-gray-400 hover:text-white transition-colors">Animations</li>
                    <li class="cursor-pointer text-gray-400 hover:text-white transition-colors">Plans</li>
                </ul>
            </div>
            <VToolbar />
        </div>
    </header>
</template>

<script setup lang="ts">
    import VToolbar from '@/components/VToolbar.vue';
</script>