<template>
  <MainLayout class="test">
    <div class="container mx-auto p-8">
      <div class="grid grid-flow-col grid-cols-12 gap-x-10">
        <div class="col-span-4">
          <AppSidebar />
        </div>
        <div class="col-span-8">
            <Suspense>
              <VListItem title="New Movies" uri-api="movie/latest"/>
              <template #fallback>
                <VSkeletonListItem />
              </template>
            </Suspense>
          <Transition name="bounce" mode="out-in">
              <Suspense>
                <VListItem title="Now Playing" column="2" to="now-playing" uri-api="movie/now_playing"/>
                <template #fallback>
                  <VSkeletonListItem column="2" />
                </template>
              </Suspense>
          </Transition>
          <Transition name="bounce" mode="out-in">
            <Suspense>
              <VListItem title="Top Rated" column="3" to="top-rated" uri-api="movie/top_rated"/>
              <template #fallback>
                <VSkeletonListItem column="3" />
              </template>
            </Suspense>
          </Transition>
        </div>
      </div>
    </div>
  </MainLayout>
  <div class="grid-cols-3"></div>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import AppSidebar from '@/layouts/partials/AppSideBar.vue';
import VListItem from '@/components/VListItem.vue';
import VSkeletonListItem from '@/components/VSkeletonListItem.vue';

const clickHandler = () => {
  console.log("test");
}


// const res = await HTTP.get('movie/now_playing?page=1');

// console.log(res);
</script>