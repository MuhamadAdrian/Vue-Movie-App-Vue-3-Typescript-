<template>
    <div>
        <AppBar />
        <main>
            <slot></slot>
        </main>
        <AppFooter/>
    </div>
</template>

<script setup lang="ts">
import AppBar from './partials/AppBar.vue';
import AppFooter from './partials/AppFooter.vue';
</script>