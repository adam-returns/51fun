<script setup>
import { useRoute } from "vue-router";
import { ref, reactive, onBeforeMount } from "vue";
import axios from "axios";
const route = useRoute();
const id = route.params.id;
const post = reactive({});
const comments = ref([]);
onBeforeMount(() => {
  // fetch(`https://dummyjson.com/posts/${id}`)
  //     .then(res => res.json())
  //     .then(data => {
  //         post.id = data.id
  //         post.title = data.title
  //         post.body = data.body
  //     })
  axios.get(`https://dummyjson.com/posts/${id}`).then((res) => {
    post.id = res.data.id;
    post.title = res.data.title;
    post.body = res.data.body;
  });

  axios.get(`https://dummyjson.com/posts/${id}/comments`).then((res) => {
    comments.value = res.data.comments;
  });
});
</script>
<template>
  <!-- <div>
        <article class="mb-10">
        <h1 class="text-xl mb-2">
            {{ post.title }}
        </h1>
        <p>
            <img :src="`//source.unsplash.com/random/300x200?${post.id}`" alt="">
            {{ post.body }}
        </p>
    </article>
    <article>
        <h2 class="font-bold underline-gray-600 mb-2" v-if="comments.length>0">Comments</h2>
        <hr/>
        <ul class="mt-5">
            <li v-for="comment in comments" :key="comment.id">
                <p><strong>{{ comment.user.username }}</strong> said {{ comment.body }}</p>
            </li>
        </ul>
    </article>
    </div> -->
  <div class="text-[#ccc] my-10 pt-[20px] md:pt-[130px] max-w-[650px] mx-auto">
    <div id="post" role="main">
      <article class="post">
        <h1 class="post-title text-4xl" >
          Lisa 疯马秀来了！Lisa 巴黎疯马秀首演视频！51 吃瓜全网首发
        </h1>
        <ul class="post-meta flex justify-center py-4">
          <li><a href="/author/19/">瓜农</a> •</li>
          <li><time>2023 年 09 月 29 日</time></li>
          <li>
            • <a href="/category/wpcz/">今日吃瓜</a> ,
            <a href="/category/whmx/">明星黑料</a>
          </li>
        </ul>
        <div class="post-content">
          <p class="flex gap-4 mb-4">
            <a class="content-file" href="/40358.html" target="_blank">              
              <span class="content-file-filename">空降约啪</span>
            </a>
            <a class="content-file" href="/53324.html" target="_blank">              
              <span class="content-file-filename">蜜桔直播</span>
            </a>
            <a class="content-file" href="/62520.html" target="_blank">              
              <span class="content-file-filename">草莓直播</span>
            </a>
          </p>
          <p class="flex gap-4 mb-4">
            <a class="content-file" href="/40361.html" target="_blank">              
              <span class="content-file-filename">香妃直播</span>
            </a>
            <a class="content-file" href="/40358.html" target="_blank">              
              <span class="content-file-filename">免费约炮</span>
            </a>
            <a class="content-file" href="/45890.html" target="_blank">              
              <span class="content-file-filename">91 全能</span>
            </a>
          </p>
          <blockquote class="border-l-[5px] py-4 border-[#5f5f5f] text-[555] bg-[#ffffff0f]">
            <p class="px-4 py-2 text-md">
              <strong>
                51 吃瓜网最新地址
                <a class="text-[#1abc9c] font-[500]  " href="https://51chigua.org" target="_blank"
                  >https://51chigua.org</a
                >
              </strong>
            </p>
            <p class="px-4 py-3 text-md">
              <strong>
                视频播放异常 请使用 <a class="text-[#1abc9c] font-[500]" href="/45909.html">51 吃瓜官方 App</a>
              </strong>
            </p>
            <p class="px-4 py-3 text-md">
              <strong>苹果 App 白屏？请等待一分钟 / 切换网络 / 尝试
                <a class="text-[#1abc9c] font-[500]"
                  href="/45909.html"
                  >重新安装</a
                >
              </strong>
            </p>
          </blockquote>
          <p class="py-4">
            本期关键词：#Lisa #Lisa 疯马秀 #Lisa 疯马秀首演 #Lisa 脱衣舞
            #blackpink #LISAxCRAZYHORSEPARIS #LISAxCRAZYHORSE
          </p >
          <p class="pb-4">Lisa 在 ins 发了疯马秀内场照，表示 “等不及与大家见面了”。</p>
          <p>
            <img class="pb-4"
              src="/images/blog-details-1.jpg"
            />
            <img class="pb-4"
              src="/images/blog-details-2.jpg"
            />
            <img class="pb-4"
              src="/images/blog-details-3.jpg"
            />
            <p class="py-4">Lisa 的疯马秀造型</p>
            <img class="pb-4"
              src="/images/blog-details-4.jpg"
            />
            <img class="pb-4"
              src="/images/blog-details-5.jpg"
            />
          </p>
          <p>
            <img
              src="/images/blog-details-6.jpg"
            />            
          </p>
          <p class="py-4">Lisa 的 巴黎 疯马秀 首演已完成，先给大家来一段文字简报</p>
          <p>
            <img
              src="/images/blog-details-7.jpg"
            />
          </p>
          <p class="py-4">简单说几点大家最关心的吧：</p>
          <p class="py-4">
            1．来了什么名人？因为是 Lisa 的首场秀，还是有些重磅嘉宾到场的，包括
            LV 集团老板阿诺先生本人和太太、他的公子、名模克劳迪的女儿、blackpink
            另 2 名成员 Jisoo 和
            Rose①这群人在开秀前五分钟进场，坐在大约第三排的中间位子（整个场馆成阶梯式，大概
            7—8 排）
          </p>
          <p class="py-4">
            2．crazyhorse 究竟是怎样一种表演形式？此次疯马由于 Lisa
            的加入被炒得沸沸扬扬，很多以前对它并不熟悉的人，都知道疯马是裸女的舞蹈表演。的确如此，场上约有
            10
            名顶级美女在近乎全裸的状态下（只穿条丁字裤佩戴假发、以及略带情趣的装饰），伴随着灯光、音乐起舞。不得不说现场的灯光氛围实在太棒了，随着人体的舞动呈现着不同的效果，虽然肉眼看到的是裸女，但亲临者却感受不到低俗、色情，相反表演很震撼，舞者很专业表演也很卖力，带给我这种第一次看秀的观众真的是与众不同的感受。
          </p>
          <p class="py-4">
            3．lisa
            究竟演了什么？脱到何种程度？被炒到近万欧元一张的门票，大伙就是冲着
            Lisa 去的，整个 1.5 小时的表演，lisa 总共 solo
            独舞了两首曲子，一首俏皮可爱、一首性感妩媚，每首约 3—4
            分钟，另外串场了三四次，包括最后的谢幕，总共加起来出场大约 15
            分钟。虽然时间不长，但她的每一次出场都是全场尖叫。穿着方面 Lisa
            相比其他舞女就保守多了，个人认为比她演唱会尺度稍微大一点，内衣底裤都包的很严实，也没有网传的会穿丁字裤或者只贴乳贴，完全没有
          </p>
          <p class="py-4">
            4．场内外环境？进场的安保挺严格，所有人的手机必须关机并且放进一个特殊的袋子里（我觉得打开会自动报警的那种），离场的时候工作人员会帮忙打开。入场的每个人都要核对护照信息，外套必须穿在身上或者寄存，不允许抱在手里
          </p>
          <p class="py-4">
            总结：lisa
            的疯马首秀与其说是她为了打入欧美市场的奋力一搏，还不如说是疯马秀借着
            Lisa 的名气狠狠地火了一把。不到 15
            分钟的个人演出，已经吸引了全世界几十亿人的关注
          </p>
          <hr />
          <p class="py-4">lisa 疯马秀视频👇：<br /></p>
          <div>
            <div>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/5Ejp7yFZxPM?si=sDxFCIPssOLLyB1U" title="51fun player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div></div>
          </div>
          <p class="py-6">lisa 疯马秀结束后离开👇：<br /></p>
            <div>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/k2qgadSvNyU?si=PBhbClWvubT2Ka6X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          <blockquote class="my-6 border-l-[5px] py-4 border-[#5f5f5f] text-[555] bg-[#ffffff0f]">
            <p class="py-4 px-4">
              <a class="content-file" href="/40358.html" target="_blank">
                
                <span class="content-file-filename"
                  >同城约炮 首单免费 空降嫩模 帝王享受</span
                >
              </a>
            </p>
          </blockquote>
          <blockquote class="my-6 border-l-[5px] py-4 border-[#5f5f5f] text-[555] bg-[#ffffff0f]">
            <p class="py-4 px-4 text-md">
              <a class="text-[#1abc9c] font-[500]" href="/45912.html">下载 51 吃瓜官方 app，观看完整版</a>
            </p>
            <p class="py-4 px-4">
              <a class="content-file " href="/45912.html" target="_blank">
                
                <span class="content-file-filename"
                  >51 吃瓜，免费吃瓜，每日更新</span
                >
              </a>
            </p>
            <p class="py-4 px-4 text-md"><a class="text-[#1abc9c] font-[500]" href="/qun.html">点击加入 51 吃瓜官方微信 QQ 群</a></p>
            <p class="py-4 px-4 text-md"><a class="text-[#1abc9c] font-[500]" href="/6535.html">点击分享给好友，领取万元现金红包！</a></p>
            <p class="py-4 px-4 mb-4">
              <a class="content-file" href="/40361.html" target="_blank">                
                <span class="content-file-filename"
                  >香妃直播 饥渴少妇 直播大秀 学妹潮喷</span
                >
              </a>
            </p>
            <p class="py-4 px-4">
              <a  class="content-file " href="/53324.html" target="_blank">                
                <span class="content-file-filename"
                  >蜜桔直播 极品嫩模 少女萝莉 网红大秀</span
                >
              </a>
            </p>
          </blockquote>
          <blockquote class="my-6 border-l-[5px] py-4 border-[#5f5f5f] text-[555] bg-[#ffffff0f]"><p class=" px-4 text-md">福利必备</p></blockquote>
          <p class="flex gap-4 mb-4">
            <a class="content-file" href="/52985.html" target="_blank">              
              <span class="content-file-filename">暗网禁区</span>
            </a>
            <a class="content-file" href="/45914.html" target="_blank">              
              <span class="content-file-filename">海角社区</span>
            </a>
            <a class="content-file" href="/45918.html" target="_blank">              
              <span class="content-file-filename">51 品茶</span>
            </a>
          </p>
          <p class="flex gap-4 mb-4">
            <a class="content-file" href="/45913.html" target="_blank">              
              <span class="content-file-filename">91 全能</span>
            </a>
            <a class="content-file" href="/45922.html" target="_blank">              
              <span class="content-file-filename">换妻社区</span>
            </a>
            <a class="content-file" href="/45916.html" target="_blank">              
              <span class="content-file-filename">抖阴破解</span>
            </a>
          </p>
          <p class="flex gap-4 mb-4">
            <a class="content-file" href="/45923.html" target="_blank">              
              <span class="content-file-filename">成人 p 站</span>
            </a>
            <a class="content-file" href="/52988.html" target="_blank">              
              <span class="content-file-filename">微密破解</span>
            </a>
            <a class="content-file" href="/45920.html" target="_blank">              
              <span class="content-file-filename">老九品茶</span>
            </a>
          </p>
          <p class="flex gap-4 mb-4">
            <a class="content-file" href="/52989.html" target="_blank">              
              <span class="content-file-filename">91 传媒</span>
            </a>
            <a class="content-file" href="/62033.html" target="_blank">              
              <span class="content-file-filename">51 猎奇</span>
            </a>
            <a class="content-file" href="/57619.html" target="_blank">              
              <span class="content-file-filename">天涯论坛</span>
            </a>
          </p>
          <p class="flex gap-4 mb-4">
            <a class="content-file" href="/55772.html" target="_blank">              
              <span class="content-file-filename">日本 AV</span>
            </a>
            <a class="content-file" href="/45917.html" target="_blank">              
              <span class="content-file-filename">SM 社区</span>
            </a>
            <a class="content-file" href="/57727.html" target="_blank">              
              <span class="content-file-filename">男同社区</span>
            </a>
          </p>
          <p class="flex gap-4 mb-4">
            <a class="content-file" href="/66555.html" target="_blank">              
              <span class="content-file-filename">撸先生</span>
            </a>
            <a class="content-file" href="/66556.html" target="_blank">              
              <span class="content-file-filename">91 视频</span>
            </a>
            <a class="content-file" href="/66557.html" target="_blank">              
              <span class="content-file-filename">51 萝莉</span>
            </a>
          </p>
          <blockquote class="my-6 border-l-[5px] py-4 border-[#5f5f5f] text-[555] bg-[#ffffff0f]"><p class="px-4 text-md">精品推荐</p></blockquote>
          <p class="flex gap-4 mb-4">
            <a class="content-file" href="/45875.html" target="_blank">              
              <span class="content-file-filename">51 福利</span>
            </a>
            <a class="content-file" href="/50527.html" target="_blank">              
              <span class="content-file-filename">私房 KTV</span>
            </a>
            <a class="content-file" href="/62034.html" target="_blank">              
              <span class="content-file-filename">翻墙神器</span>
            </a>
          </p>
          <p class="flex gap-4 mb-4">
            <a class="content-file" href="/57726.html" target="_blank">              
              <span class="content-file-filename">滴滴招嫖</span>
            </a>
            <a class="content-file" href="/53089.html" target="_blank">              
              <span class="content-file-filename">果冻传媒</span>
            </a>
            <a class="content-file" href="/45921.html" target="_blank">              
              <span class="content-file-filename">她趣乱伦</span>
            </a>
          </p>
          <p class="flex gap-4 mb-4">
            <a class="content-file" href="/45915.html" target="_blank">              
              <span class="content-file-filename">51 动漫</span>
            </a>
            <a class="content-file" href="/52986.html" target="_blank">              
              <span class="content-file-filename">妹团外卖</span>
            </a>
            <a class="content-file" href="/52984.html" target="_blank">              
              <span class="content-file-filename">黑洞社区</span>
            </a>
          </p>
          <p class="flex gap-4 mb-4">
            <a class="content-file" href="/52987.html" target="_blank">              
              <span class="content-file-filename">性吧社区</span>
            </a>
            <a class="content-file" href="/57728.html" target="_blank">              
              <span class="content-file-filename">蜜豆视频</span>
            </a>
            <a class="content-file" href="/57729.html" target="_blank">              
              <span class="content-file-filename">pili 漫画</span>
            </a>
          </p>
         
          <div class="content-tabs ">
            <el-tabs type="border-card">
              <el-tab-pane label="网络问题">
                <div class="content-tab-content selected" data-tab-index="1">
                <br />若网络无法打开文章或视频，请切换 (移动数据网络运营商) 或
                (WIFI)，或更改网络 DNS（自行百度）
                </div>
              </el-tab-pane>
              <el-tab-pane label="浏览器问题">
                    <div class="content-tab-content" data-tab-index="2">
                    <br />若浏览器无法打开文章或视频，请更换使用
                    [Chrome/Fierfox/Opera/Alook] 等浏览器
                  </div>
              </el-tab-pane>
              <el-tab-pane label="常见问题"> 
                <div class="content-tab-content" data-tab-index="3">
                <br />牢记永久网址：<a href="https://51cg.fun" target="_blank"
                  >51cg.fun</a
                >
                <br />无法打开请更换 浏览器 或更换 网络
                DNS，被劫持通常是你的网络 DNS 被劫持污染<br />请把回家地址分享给身边有需要的人
                </div>
              </el-tab-pane>              
            </el-tabs>    
           
          </div>
        </div>

        <div class="tags">
          <div itemprop="keywords" class="keywords YkziYC">
            <a href="/tag/Lisa/">Lisa</a><a href="/tag/BLACKPINK/">BLACKPINK</a
            ><a href="/tag/Lisa%E7%96%AF%E9%A9%AC%E7%A7%80/">Lisa 疯马秀</a
            ><pangu> </pangu
            ><a href="/tag/Lisa%E7%96%AF%E9%A9%AC%E7%A7%80%E9%A6%96%E6%BC%94/"
              >Lisa 疯马秀首演</a
            ><pangu> </pangu
            ><a href="/tag/LISAxCRAZYHORSEPARIS/">LISAxCRAZYHORSEPARIS</a>
          </div>
          <div class="modify-time">最后编辑于: 2023 年 10 月 05 日</div>
        </div>
        <div class="flash">点击分享给色友</div>
        <div class="bling" style="display: none">
          <span class="bling1">复制成功，打开微信，发给色友</span>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.content-file{
    border: 1px solid #555;
    padding: 15px 15px;
    border-radius: 5px;
    margin-bottom: 10px;
    
    
}
a.content-file:hover {
    border: 1px solid #1abc9c;
    color: #1abc9c;
}
/* a.post-content:hover , .comment-content a {
    color: #1abc9c;
    background: transparent;
    text-decoration: none;    
    word-break: break-all;
    border: 1px solid #1abc9c;
    
} */
blockquote  a {
    position: relative;
    white-space: normal;
}
blockquote   a:hover:after{
    left: 0;
    width: 100%;
    -webkit-transition: width 350ms;
    -moz-transition: width 350ms;
    -ms-transition: width 350ms;
    -o-transition: width 350ms;
    transition: width 350ms;
}
blockquote a:after{
    position: absolute;
    bottom: -0.0625rem;
    left: 100%;
    width: 0;
    border-bottom: 0.0625rem solid #1abc9c;
    content: "";
    -webkit-transition: width 350ms,left 350ms;
    -moz-transition: width 350ms,left 350ms;
    -ms-transition: width 350ms,left 350ms;
    -o-transition: width 350ms,left 350ms;
    transition: width 350ms,left 350ms;

}
.el-tabs--border-card {
    background: transparent; 
    border-radius: 4px;
    
   
}

</style>
