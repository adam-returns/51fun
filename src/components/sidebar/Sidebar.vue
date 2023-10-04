<script setup>

function openNav() {
  document.getElementById("mySidebar").style.width = "300px";
  document.getElementById("main").style.marginLeft = "300px";
} 
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
</script>
<template>
  <div>
    <section id="mySidebar" class="sidebar  text-white" >
      <a href="javascript:void(0)" class="closebtn" @click="closeNav">×</a>
        <div class=" py-6 flex justify-center">
            <router-link  to="/">
                <img class="w-[100px]" src="/images/mobile-logo.png" alt="" />
            </router-link>
        </div>
        <div class="relative w-full my-6">
            <form class="form" id="search-form" action="/" role="search">
            <input
                id="search"
                type="text"
                name="s"
                required=""
                placeholder="搜索..."
                class="search search-form-input w-full bg-[#131313]  p-3 border-none color-[#1abc9c] text-md text-center "
            />
            <button id="search_btn" type="submit" class="search-btn absolute top-3 right-4 text-[#ccc] bg-transparent border-none text-md ">
                <i class="fa fa-search text-[18px]"></i>
            </button>
            </form>
        </div>
        <ul class="flex flex-col text-center space-y-5">         
          <li>
            <router-link to="/eatmelon">今日吃瓜</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
          <li>
            <router-link to="/posts">Posts</router-link>
          </li>
        </ul>
        
      </section>
      <div class="block md:hidden fixed z-10 left-[280px] top-5" @click="openNav">
           <el-button round>导航</el-button>
      </div>
      </div>
</template>

<style scoped>
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
  padding-top: 60px;
}

.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidebar a:hover {
  color: #f1f1f1;
}

.sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}



#main {
  transition: margin-left .5s;
 
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