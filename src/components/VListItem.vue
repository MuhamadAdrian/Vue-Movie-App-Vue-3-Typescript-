<template>
    <div class="mb-12">
        <VHeading :title="title" :to="to" />
        <div class="grid gap-x-4 grid-cols mt-4" :class="`grid-cols-${column}`">
            <div v-for="movie in suffledMovies.slice(0, Number(column))" :key="movie.id">
                <VItem :with-keywords="withKeywords" :item="movie" class="mt-4" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import VHeading from '@/components/VHeading.vue'
import { HTTP } from '@/helper/http';
import { computed, ref } from 'vue';
import VItem from './VItem.vue';
    const props = withDefaults(defineProps<{
        title: string,
        column?: string,
        uriApi?:string,
        paramsApi?:string,
        to?:string,
        withKeywords?:boolean
    }>(), {
        title: 'Title',
        column: '1',
        uri: 'movie/app',
        withKeywords: false
    });

    const page = ref<number>(1);
    const movies = ref<any>([]);

    const suffledMovies = computed(() => {
        return [...movies.value].sort( () => Math.floor(Math.random() * Math.floor(3)) - 1)  
    })

    try{
        const { data } = await HTTP.get(`${props.uriApi}?page=${page.value}`);
        if (data.results) {
            movies.value = data.results;
        }else{
            movies.value = [data];
        }

        console.log(data);
    }catch(err){
        console.log(err);
    }
</script>