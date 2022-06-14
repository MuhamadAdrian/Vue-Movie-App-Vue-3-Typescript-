<template>
  <MainLayout class="test">
    <div class="container px-16 py-8">
      <div class="grid grid-flow-col grid-cols-12 gap-x-10">
        <div class="col-span-4">
          <AppSidebar />
        </div>
        <div class="col-span-8">
          <Suspense>
            <VListItem title="New Movies" uri-api="movie/latest"/>
          </Suspense>
          <Suspense>
            <VListItem title="Now Playing" column="2" to="now-playing" uri-api="movie/now_playing"/>
          </Suspense>
          <Suspense>
            <VListItem title="Top Rated" column="3" to="top-rated" uri-api="movie/top_rated"/>
          </Suspense>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import AppSidebar from '@/layouts/partials/AppSideBar.vue';
import VListItem from '@/components/VListItem.vue';

const clickHandler = () => {
  console.log("test");
}


// const res = await HTTP.get('movie/now_playing?page=1');

// console.log(res);
</script>