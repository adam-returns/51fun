<template>
    <div>  
   
   <div class="bg-primaryDark fixed z-10 text-white px-6 py-6 w-full shadow-md">
     <div class="container-fluid mx-auto flex justify-center items-center gap-4">
       
       <div class="w-[250px] lg:w-[160px] text-xl font-bold">
         <router-link class="w-full" to="/">51 吃瓜网 </router-link>
       </div>
       <div class="flex flex-wrap items-center gap-4 text-sm">
         <router-link to="/eatmelon">今日吃瓜</router-link>
         <router-link to="/dailymelon">每日大瓜</router-link>
         <router-link to="/popularbigmelon">热门大瓜</router-link>
         <router-link to="/must-see-dagua">必看大瓜</router-link>
         <router-link to="/internetcelebrity">必看大瓜</router-link>
         <router-link to="/studentcampus">学生校园</router-link>
         <router-link to="/clebrityscandal">明星黑料</router-link>
         <router-link to="/leadingcadres">领导干部</router-link>
         <router-link to="/eatmelonoverseas">海外吃瓜</router-link>
         <router-link to="/connotationjokes">内涵段子</router-link>
         <router-link to="/everyoneeatsmelon">人人吃瓜</router-link>
         <router-link to="/chigunews">吃瓜新闻</router-link>
         <router-link to="/movieentertainment">看片娱乐</router-link>
         <div class="flex items-center">
           <div class="flex items-center">
             <p @click="showClick">更多 <i class="fa fa-caret-down" aria-hidden="true"></i> </p>
                        
           </div>
           <el-dropdown ref="dropdown1" trigger="contextmenu" style="">
             <span class="el-dropdown-link"> </span>
             <template #dropdown>
               <el-dropdown-menu>
                 <el-dropdown-item
                   ><router-link
                     target="_blank"
                     title="Business Coorperation"
                     to="/business-coorperation"
                     >商务合作</router-link
                   ></el-dropdown-item
                 >
                 <el-dropdown-item
                   ><router-link title="往期内容" to="/previous-issues"
                     >往期内容</router-link
                   ></el-dropdown-item
                 >
                 <el-dropdown-item
                   ><router-link
                     target="_blank"
                     title="吃瓜app"
                     to="/eat-melon-app"
                     >吃瓜 app</router-link
                   ></el-dropdown-item
                 >
                 <el-dropdown-item
                   ><router-link title="分享领钱" to="/get-money"
                     >分享领钱</router-link
                   ></el-dropdown-item
                 >
                 <el-dropdown-item
                   ><router-link title="求瓜投稿" to="/contribute"
                     >求瓜投稿</router-link
                   ></el-dropdown-item
                 >
                 <el-dropdown-item
                   ><router-link title="回家的路" to="/the-way-home"
                     >回家的路</router-link
                   ></el-dropdown-item
                 >
                 <el-dropdown-item
                   ><router-link title="加入我们" to="/join-us"
                     >加入我们</router-link
                   ></el-dropdown-item
                 >
                 <el-dropdown-item
                   ><router-link
                     target="_blank"
                     title="福利app"
                     to="/welfare-app"
                     >福利 app</router-link
                   ></el-dropdown-item
                 >
                 <el-dropdown-item
                   ><router-link
                     target="_blank"
                     title="暗网禁区"
                     to="/darknet-restricted"
                     >暗网禁区</router-link
                   ></el-dropdown-item
                 >
                 <el-dropdown-item
                   ><router-link
                     target="_blank"
                     title="海角社区"
                     to="/cape-community"
                     >海角社区</router-link
                   ></el-dropdown-item
                 >
                 <el-dropdown-item
                   ><router-link
                     target="_blank"
                     title="91全能版"
                     to="/all-round-version"
                     >91全能版</router-link
                   ></el-dropdown-item
                 >
                 <el-dropdown-item
                   ><router-link
                     target="_blank"
                     title="老九品茶"
                     to="/laojiupintea"
                     >老九品茶</router-link
                   ></el-dropdown-item
                 >
                 <el-dropdown-item
                   ><router-link
                     target="_blank"
                     title="私房KTV"
                     to="/private-ktv"
                     >私房KTV</router-link
                   ></el-dropdown-item
                 >
               </el-dropdown-menu>
             </template>
           </el-dropdown>
         </div>        
       </div>
       <div class="button-icons">
               <nav>
                 <ul class="flex gap-2">
                   <li   >
                     <a href="#" class="w-10 h-10 bg-secondaryDark  hover:text-black hover:bg-white rounded-full flex items-center justify-center">                      
                       <i class="fa fa-search text-[14px] leading-8" aria-hidden="true"></i>
                     </a>
                   </li>
                   <li>
                     <a href="#" class="w-10 h-10 bg-secondaryDark  hover:text-black hover:bg-white rounded-full flex items-center justify-center">
                       <i class="fa fa-bookmark text-[14px] leading-8"></i>
                     </a>
                   </li>
                   <li>
                     <a href="#" class="w-10 h-10 bg-secondaryDark  hover:text-black hover:bg-white rounded-full flex items-center justify-center">
                       <i class="fa fa-twitter text-[14px] leading-8" aria-hidden="true"></i>
                     </a>
                 </li>
                   <li>
                     <a href="#" class="w-10 h-10 bg-secondaryDark  hover:text-black hover:bg-white rounded-full flex items-center justify-center">
                       <i class="fa fa-telegram text-[14px] leading-8" aria-hidden="true"></i>
                     </a>
                 </li>
                   <li>
                     <a href="#" class="w-10 h-10 bg-secondaryDark  hover:text-black hover:bg-white rounded-full flex items-center justify-center">
                       <i class="fa fa-qq text-[14px] leading-8" aria-hidden="true"></i>
                     </a>
                 </li>
                   <li>
                     <a href="#" class="w-10 h-10 bg-secondaryDark  hover:text-black hover:bg-white rounded-full flex items-center justify-center">
                       <i class="fa fa-font text-[14px] leading-8" aria-hidden="true"></i>
                     </a>
                 </li>
                 </ul>
               </nav>
       </div>        
     </div>
   </div>
 </div> 
 </template>
 <script setup>
 import { ref } from "vue";
 const dropdown1 = ref();
 
 function showClick() {
   if (!dropdown1.value) {
     return dropdown1.value.handleClose();
   } else {
     dropdown1.value.handleOpen();
   }
 }
 </script>
 <style scoped>
 .example-showcase .el-dropdown-link {
   cursor: pointer;
   color: #fff;
   display: flex;
   align-items: center;
 
 }
 </style>
 