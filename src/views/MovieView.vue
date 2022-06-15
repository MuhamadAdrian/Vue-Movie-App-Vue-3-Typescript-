<template>
    <MainLayout>
        <div class="container p-8 mx-auto">
            <div class="grid grid-cols-12 gap-x-10">
                <div class="col-span-8">
                    <Suspense>
                        <MovieDetails />
                    </Suspense>
                </div>
                <div class="col-span-4">

                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import MovieDetails from '@/components/MovieDetails.vue';
</script>