<template>
  <section>
      <div class="weui-loadmore weui-loadmore_line">
        <span class="weui-loadmore__tips">{{links.category}}</span>
    </div>
    <div class="links-panel">
        <a v-for="l in links.links" @click="go(links.category,l.name)" :href="l.url">{{l.name}}</a>
    </div>
  </section>
</template>
<script type="text/javascript">
  export default {
    props: ['links'],
    data () {
      return {

      }
    },
    methods: {
      go (category, name) {
        _hmt.push(['_trackEvent', 'links', category, name]);
      }
    }
  }
</script>
<style lang="scss" scoped>
  .weui-loadmore {
    margin-bottom: .5em;
    height: 10px;
  }
  .weui-loadmore_line {
    margin-top: 1.4em;
  }
  .links-panel {
    padding: 0 15px;
    text-align: center;
    a {
      background: #FFF;
      border: 1px solid rgba(34,36,38,.15);
      color: rgba(0,0,0,.87);
      box-shadow: none;
      display: inline-block;
      padding: 7px;
      border-radius: 6px;
      font-size: 13px;
      font-weight: bold;
      margin: 0 .5em .5em 0;
      transition: background .1s ease;
    }
  }
</style>
