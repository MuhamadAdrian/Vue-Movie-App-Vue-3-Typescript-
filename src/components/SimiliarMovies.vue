<template>
    <div>
        <VHeading title="Similiar Movies" :to="`/${$route.params.id}/similiar-movies`"/>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <VItemSquare v-for="item in suffledMovies.splice(0,4)" :key="item.id" :item="item" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { HTTP } from '@/helper/http';
import { computed, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import VHeading from './VHeading.vue';
import VItemSquare from './VItemSquare.vue';

const route = useRoute();

const results = ref<any>([]);

watchEffect(async () => {
  const {data} = await HTTP.get(`movie/${route.params.id}/similar`);
  results.value = data.results;
})

const suffledMovies: any = computed(() => {
    return [...results.value].sort( () => Math.floor(Math.random() * Math.floor(3)) - 1)  
})
</script>

<style scoped>

</style>