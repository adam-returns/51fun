<script>

</script>
<template>
  <footer id="footer">
    <div class="container mx-auto text-xs text-white flex justify-center items-center" >
      <p class="copyright">
        Copyright © 2023
        <a class="text-[#1abc9c] " href="https://www.51cg1.com/">51 吃瓜网 - 热心的朝阳群众 51cg.fun</a>
        • Powered by
        <a class="text-[#1abc9c]" href="https://www.51cg1.com/" target="_blank"
          >51 吃瓜网 - 热心的朝阳群众 51cg.fun</a
        >
      </p>
    </div>
  </footer>
</template>
<style scoped>

#footer a {
    position: relative;
    white-space: normal;
}
#footer  a:hover:after{
    left: 0;
    width: 100%;
    -webkit-transition: width 350ms;
    -moz-transition: width 350ms;
    -ms-transition: width 350ms;
    -o-transition: width 350ms;
    transition: width 350ms;
}
#footer a:after{
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

</style>