<script setup>
import TopMenu from './components/TopMenu.vue';
</script>
<template>
  <div>
    <TopMenu/>
  <section class="flex">
    <aside class="w-[450px] bg-black ">
      <router-view name="LeftSideBar"></router-view>
    </aside>
    <main class="w-full min-h-screen p-5">
      <router-view></router-view>
    </main>
  </section>
  <footer></footer>
  </div>
</template>
<style scoped></style>
