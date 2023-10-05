
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
    <section id="mySidebar"  class="bg-[#191919] w-[300px]  text-white" >      
        <div class="py-6">
            <router-link  to="/">
                <img class="w-[100px]" src="/images/mobile-logo.png" alt="" />
            </router-link>
        </div>
        <div class="relative w-[300px] mb-6">
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
        <ul class="flex flex-col text-center ">         
          <li>
            <router-link to="/eatmelon">今日吃瓜</router-link>
          </li>
          <li>
            <router-link to="/dailymelon">每日大瓜</router-link>
          </li>
          <li>
            <router-link to="/popularbigmelon">热门大瓜</router-link>
          </li>
          <li>
            <router-link to="/posts">Posts</router-link>
          </li>
        </ul>
        <div class="button-icons bg-[#000] py-2  w-[300px] flex justify-center">
        <nav>
          <ul class="flex gap-2">
            <li>
              <a
                href="#"
                class="w-10 h-10 bg-secondaryDark hover:text-black hover:bg-white rounded-full flex items-center justify-center"
              >
                <i class="fa fa-bookmark text-[14px] leading-8"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="w-10 h-10 bg-secondaryDark hover:text-black hover:bg-white rounded-full flex items-center justify-center"
              >
                <i
                  class="fa-brands fa-twitter text-[14px] leading-8"
                  aria-hidden="true"
                ></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="w-10 h-10 bg-secondaryDark hover:text-black hover:bg-white rounded-full flex items-center justify-center"
              >
                <i
                  class="fa-brands fa-telegram text-[14px] leading-8"
                  aria-hidden="true"
                ></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="w-10 h-10 bg-secondaryDark hover:text-black hover:bg-white rounded-full flex items-center justify-center"
              >
                <i
                  class="fa-brands fa-qq text-[14px] leading-8"
                  aria-hidden="true"
                ></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="w-10 h-10 bg-secondaryDark hover:text-black hover:bg-white rounded-full flex items-center justify-center"
              >
                <i
                  class="fa fa-font text-[14px] leading-8"
                  aria-hidden="true"
                ></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      </section>
      
      
      </div>
</template>

<style scoped>


.sidebar a {
  padding: 8px;
    text-decoration: none;
    font-size: 22px;
    color: #ccc;
    display: flex;
    transition: 0.5s;
    /* width: 300px; */
    align-items: center;
    justify-content: center;

}


.sidebar a:hover {
 
  background: #2c2a2a;
}

</style>