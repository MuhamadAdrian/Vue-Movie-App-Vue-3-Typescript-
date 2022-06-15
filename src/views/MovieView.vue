<template>
    <MainLayout>
        <div class="container p-8 mx-auto">
            <p>{{ store.state.bookmark.test }}</p>
            <div class="grid grid-cols-12 gap-x-10">
                <div class="col-span-8">
                    <Suspense>
                        <MovieDetails />
                        <template #fallback>
                            <p>Loading...</p>                            
                        </template>
                    </Suspense>
                </div>
                <div class="col-span-4">
                    <Suspense>
                        <SimiliarMovies />
                        <template #fallback>
                            <p>Loading...</p>                            
                        </template>
                    </Suspense>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import SimiliarMovies from '@/components/SimiliarMovies.vue';
import MovieDetails from '@/components/MovieDetails.vue';
import { useStore } from 'vuex';

const store = useStore();
</script>