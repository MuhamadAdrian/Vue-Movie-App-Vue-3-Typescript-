<template>
    <div class="flex items-center gap-x-5">
        <VButton class="ring-gray-600 rounded-full p-1" icon="history" stroke="currentColor" />
        <VButton class="ring-gray-600 rounded-full p-1 relative" icon="bookmark" stroke="currentColor">
            <Transition name="bounce" mode="out-in">
                <VBadges v-if="store.state.bookmark.bookmark.length > 0" class="-top-1.5 -right-1.5 bg-white text-gray-900" :text="store.state.bookmark.bookmark.length" />
            </Transition>
        </VButton>
        <VButton class="ring-gray-600 rounded-full p-1" icon="search" stroke="currentColor" />
    </div>
</template>

<script setup lang="ts">
import VButton from './VButton.vue';
import VBadges from './VBadges.vue';
import { useStore } from 'vuex';

const store = useStore();
</script>

<style scoped>

</style>