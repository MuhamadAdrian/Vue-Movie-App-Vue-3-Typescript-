<template>
<div>
    <div @click="$router.push({name: 'movie-details', params: {id: item.id}})" class="w-full shadow-xl shadow-black/20 hover:shadow-2xl transition-all relative hover:transform hover:-translate-y-2 duration-500 bg-gray-800 rounded-2xl h-56 p-4 overflow-hidden cursor-pointer">
        <img class="absolute top-0 left-0 object-cover object-center w-full h-full" :src="`${imageUrl}w400/${item.poster_path}`" :alt="item.original_title">
        <div class="absolute h-2/6 hover:h-full duration-300 transition-all bg-white/30 w-full bottom-0 left-0 rounded-2xl backdrop-blur-md">
            <div class="flex items-center info hover:flex-col transition-all gap-x-3 py-3 px-5 h-full">
                <VButton icon="play" h-icon="h-8" w-icon="w-8" class="rounded-full ring-transparent bg-white/80 text-gray-600 my-auto" stroke="currentColor" />
                <div class="w-full overflow-hidden">
                    <p class="truncate overflow-hidden">{{ item.original_title }}</p>
                    <p class="truncate text-xs">{{ item.release_date }}</p>
                </div>
                <div class="flex items-center">
                    <VIcon name="star" w="w-5" h="h-5" fill="currentColor" />
                    <p class="text-sm">{{ item.vote_average }}</p>
                </div>
                <p class="desc text-xs truncate whitespace-pre-wrap h-1/4 mt-4">{{ item.overview }}</p>
            </div>
        </div>
    </div>
    <Suspense>
        <KeywordList v-if="withKeywords" :id="item.id" />
    </Suspense>
</div>
</template>

<script setup lang="ts">
import { imageUrl } from '@/helper/baseUrlImage'
import VButton from './VButton.vue';
import KeywordList from './KeywordList.vue';
import VIcon from './VIcon.vue'
interface Props {
    item: any,
    withKeywords?: boolean
}
withDefaults(defineProps<Props>(), {
    withKeywords: false
}) 

</script>

<style scoped>
.desc{
    @apply hidden
}
.info:hover .desc{
    @apply block
}
</style>