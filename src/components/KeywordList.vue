<template>
    <div class="mt-4">
        <VChips v-for="keyword in data.keywords" :text="keyword.name" :key="keyword.id" />
    </div>
</template>

<script setup lang="ts">
import VChips from './VChips.vue';
import { HTTP } from '@/helper/http';

    const props = defineProps<{
        id?:string
    }>();

    const {data} = await HTTP.get(`movie/${props.id}/keywords`);

    console.log(data);
</script>
