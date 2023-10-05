<script>
export default{
  data(){
    return {
      isActive:false
    }
  },  
}
</script>
<template>
  <div>
    <div>
      <div class="mobileBtn  md:hidden fixed z-10  top-5" :style="isActive?'margin-left:270px':'margin-left:20px' "  @click="isActive = !isActive">
           <el-button round>导航</el-button>
      </div>
      <TopMenu />
    </div>
    
  <section  class=" block md:hidden">
    <aside :style="isActive?'width:300px':'width:0px' "  class="sidebar w-[300px] bg-black ">
      <router-view name="LeftSideBar"></router-view>
    </aside>    
  </section>
    <main :style="isActive?'margin-left:300px':'margin-left:0px' " id="main" class="w-full  p-8">
      <router-view ></router-view>
    </main>
  <Footer :style="isActive?'margin-left:300px':'margin-left:0px' " class="w-full  p-8"/>
  </div>
</template>
<style scoped>
#main,
Footer {
  transition: margin-left .5s;
 
}
.sidebar {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  /* padding-top: 60px; */
}
.mobileBtn {
  transition: 0.5s;
}
.el-button.is-round {
   border: 1px solid #fff;
    background: transparent;
    color: #fff;  
    
}

.el-button.is-round:hover {
    background: #fff;
    color: #555; 
}
.el-button.is-round:active {
    background: #fff;
    color: #555;
    
}
</style>
