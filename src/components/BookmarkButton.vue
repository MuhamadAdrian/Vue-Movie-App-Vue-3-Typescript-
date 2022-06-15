<template>
<div class="hover:tranform hover:scale-105 transition-transform active:transform active:scale-110">
    <VButton v-if="!isOnBookmark" class=" ring-transparent ring-offset-0 rounded-full" @click="bookmarkHandler" icon="bookmark" w-icon="w-6" h-icon="h-6" stroke="currentColor" />
    <VButton v-else class=" ring-transparent ring-offset-0 rounded-full" @click="bookmarkHandler" icon="bookmark" w-icon="w-6" h-icon="h-6" fill="currentColor" />
</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import VButton from './VButton.vue';

interface Props {
    item: any
}

const props = defineProps<Props>();

const store = useStore();

const bookmark: any = store.state.bookmark.bookmark

const isOnBookmark = computed(() => {
    return bookmark.find((b: any) => b.id === props.item.id)
})

const bookmarkHandler = (): void => {
    if(isOnBookmark.value){
        store.commit('bookmark/unBookmark', props.item);
    }
    else{
        store.commit('bookmark/addBookmark', props.item);
    }
}
</script>