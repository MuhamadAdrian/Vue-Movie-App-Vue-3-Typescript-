<template>
    <div>
        <VSkeletonItem class="h-96">
            <img class="absolute top-0 left-0 w-full h-full object-cover object-center" :src="`${imageUrl}original/${data.backdrop_path}`" :alt="data.original_title">
            <div class="absolute w-full h-60 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"></div>
            <div class="absolute right-5 bottom-5">
                <div class="h-48 w-32 bg-gray-500 rounded-xl relative overflow-hidden shadow-2xl">
                    <img class="absolute top-0 left-0 w-full h-full object-cover object-center" :src="`${imageUrl}original/${data.poster_path}`" :alt="data.original_title">
                </div>
            </div>
            <VButton icon="play" stroke="currentColor" w-icon="w-20" h-icon="h-20" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full ring-offset-0 ring-slate-200 bg-white/50 backdrop-blur text-gray-700" />
        </VSkeletonItem>
        <h2 class="text-3xl mt-8">{{ data.original_title }}</h2>
        <p class="mt-8">Overview : </p>
        <p class="font-light mt-4 leading-relaxed">{{ data.overview }}</p>
        <p class="mt-8">Genres : </p>
        <div class="mt-4">
            <VChips v-for="genre in data.genres" :key="genre.id" :text="genre.name" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { imageUrl } from '@/helper/baseUrlImage';
import { HTTP } from '@/helper/http';
import { useRoute } from 'vue-router';
import VSkeletonItem from './VSkeletonItem.vue';
import VButton from './VButton.vue';
import VChips from './VChips.vue';
const route = useRoute();

const {data} = await HTTP.get(`movie/${route.params.id}`)

console.log(data);
</script>