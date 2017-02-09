<template>
  <div class="ds-thread" :data-thread-key="threadKey" data-title="迷你课表首页" data-url="dounate.html"></div>
</template>
<script type="text/javascript">
  export default {
    props: {
      threadKey: {
        type: String
      }
    },
    created () {
     (function() {
         var ds = document.createElement("script");
         ds.type = "text/javascript";
         ds.async = true;
         ds.src = (document.location.protocol == "https:" ? "https:" : "http:") + "//static.duoshuo.com/embed.js";
         ds.charset = "UTF-8";
         (document.getElementsByTagName("head")[0] 
          || document.getElementsByTagName("body")[0]).appendChild(ds);
     })();
    }
  }
</script>
<style type="text/css">
  .ds-thread {
    padding: 0 10px;
  }
</style>
