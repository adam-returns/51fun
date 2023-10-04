<script setup>
import TopMenu from './components/TopMenu.vue';
import Footer from './components/Footer.vue';
</script>
<template>
  <div>
    <TopMenu />
  <section class=" block md:hidden">
    <aside  class="w-[300px] bg-black ">
      <router-view name="LeftSideBar"></router-view>
    </aside>    
  </section>
    <main id="main" class="w-full overflow-x-auto overflow-y-scroll p-8">
      <router-view ></router-view>
    </main>
  <Footer />
  </div>
</template>
<style scoped></style>
