<script setup>
import HeaderMenu from './components/HeaderMenu.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div>
    <HeaderMenu class="hidden md:block"/>
    <aside       
      class=" block md:hidden">
      <router-view class="absulate" name="LeftSideBar"></router-view>
    </aside>
    <router-view class=""></router-view> 
    <Footer/>
   
  </div>
</template>

<style scoped>

</style>
