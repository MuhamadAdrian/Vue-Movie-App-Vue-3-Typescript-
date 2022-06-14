<template>
<span>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		:viewBox="`0 0 ${box} ${box}`"
		:fill="fill"
		:stroke="stroke"
		:class="[h, w]"
		v-html="path?.path"
	></svg>
</span>
</template>

<script setup lang="ts">
import { computed, ref, toRefs } from 'vue';
    interface Props {
        h?: string,
        w?: string,
        fill?: string,
        stroke?: string,
        name?: string,
        box?: string
    }

    const props = withDefaults(defineProps<Props>(), {
        h: 'h-6',
        w: 'w-6',
        fill: 'none',
        stroke: 'none',
        name: 'dashboard',
        box: '24'
    });

    interface Svg {
        name?: string,
        path?: string
    }

    const pathSvg = ref<Svg[]>([
        {
            name: 'dashboard',
            path: `<rect fill="none" height="24" width="24" /><path d="M11,21H5c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2h6V21z M13,21h6c1.1,0,2-0.9,2-2v-7h-8V21z M21,10V5c0-1.1-0.9-2-2-2h-6v7H21z"/>`,
        },
        {
            name: 'chevron-down',
            path: `<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />`,
        },
        {
            name: 'search',
            path: `<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />`,
        },
        {
            name: 'history',
            path: `<path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />`,
        },
        {
            name: 'bookmark',
            path: `<path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />`,
        },
        {
            name: 'eye',
            path: `<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />`,
        },
        {
            name: 'play',
            path: `<path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />`,
        },
        {
            name: 'pause',
            path: `<path stroke-linecap="round" stroke-linejoin="round" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />`,
        },
        {
            name: 'star',
            path: `<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />`,
        },
        {
            name: 'plus',
            path: `<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />`,
        },
    ])

    const path = computed(() => {
        return [...pathSvg.value].find((path) => path.name === props.name)
    })
</script>