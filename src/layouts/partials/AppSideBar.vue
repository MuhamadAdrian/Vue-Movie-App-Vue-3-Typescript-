<template>
    <div class="border-r pr-10 border-gray-800 sticky top-28">
        <Suspense>
            <VListItem :with-keywords="true" title="Upcoming Movies" uri-api="movie/upcoming"/>
        </Suspense>
    </div>
</template>

<script setup lang="ts">
import VListItem from '@/components/VListItem.vue';
</script>