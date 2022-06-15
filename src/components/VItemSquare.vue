<template>
    <div class="w-full relative max-w-xs h-64 rounded-xl bg-gray-700 overflow-hidden cursor-pointer hover:transform hover:-translate-y-1 transition-transform duration-300">
        <div @click="$router.push({name: 'movie-details', params: {id: item.id}})" >
            <img class="absolute top-0 left-0 w-full h-full object-cover object-center" :src="`${imageUrl}w500/${item.poster_path}`" :alt="item.original_title">
            <div class="absolute w-full h-24 bg-white/30 backdrop-blur bottom-0 left-0 p-4">
                <VButton class="bg-indigo-700/80 ring-offset-0 text-white/80 ring-white backdrop-blur rounded-full absolute -top-10 left-1/2 transform -translate-x-1/2" icon="play" w-icon="w-12" h-icon="h-12" stroke="currentColor" />
                <h2 class="text-sm font-semibold truncate">{{ item.original_title }}</h2>
            </div>
            <div class="flex items-center gap-x-1 absolute bottom-3 right-4 text-xs">
                <VIcon name="star" fill="currentColor" />
                <p>{{ item.vote_average }}</p>
            </div>
        </div>
        <BookmarkButton :item="item" class="absolute top-2 left-2 ring-white ring-offset-0 text-gray-900 p-2 bg-white/30 backdrop-blur rounded-full" />
    </div>
</template>

<script setup lang="ts">
import { imageUrl } from '@/helper/baseUrlImage';
import VButton from '@/components/VButton.vue';
import VIcon from './VIcon.vue';
import BookmarkButton from '@/components/BookmarkButton.vue'

defineProps<{
    item: any
}>()
</script>