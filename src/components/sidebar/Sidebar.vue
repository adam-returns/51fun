
<script >
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
    <section id="mySidebar"  class="bg-[#191919]  text-white" >      
        <div class="">
            <router-link  to="/">
                <img class="w-[100px]" src="/images/mobile-logo.png" alt="" />
            </router-link>
        </div>
        <div class="relative w-[300px] my-6">
            <form class="form " id="search-form" action="/" role="search">
            <input
                id="search"
                type="text"
                name="s"
                required=""
                placeholder="搜索..."
                class="search search-form-input w-[300px] bg-[#131313]  p-3 border-none color-[#1abc9c] text-md text-center "
            />
            <button id="search_btn" type="submit" class="search-btn absolute block top-3 right-4 text-[#ccc] bg-transparent border-none text-md ">
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
      
      
      </div>
</template>

<style scoped>


.sidebar a {
  padding: 8px 8px 8px 8px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: flex;
    transition: 0.5s;
    width: 300px;
    align-items: center;
    justify-content: center;

}

.sidebar a:hover {
  color: #f1f1f1;
}

</style>