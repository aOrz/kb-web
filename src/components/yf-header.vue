<template>
  <div class="weui-tab">
      <div class="icon"></div>
      <div>烟大课表查询-烟风</div>
      <div class="icon">
        <a href="http://a.app.qq.com/o/simple.jsp?pkgname=io.dcloud.H5291D2691">下载</a>
      </div>
  </div>
</template>
<script>
  export default {
    data () {
      let params = this.$route.params;
      return {
        items: [{
          text: '下载课表',
          href: '//a.app.qq.com/o/simple.jsp?pkgname=io.dcloud.H5291D2691'
        },
        {
          text: params.title ? params.title : '课程表',
          href: this.$route.name == 'Search' ? '#' + this.$route.fullPath : '#/' 
        },
        // {
        //   text:'空教室', 
        //   href: '#/'
        // },
        {
          text: '校历',
          href: '#/calendar'
        },
        {
          text: '打赏',
          href: '#/donate'
        }],
        selected: 1
      }
    },
    methods: {
      go (index) {
        _hmt.push(['_trackEvent', 'header', index]);
        this.selected = index;
      }
    }
  }
</script>
<style lang="scss" scoped>
  .weui-tab {
      background-color: #78ca38;
      display: flex;
      justify-content: space-between;
      div {
          color: #ffffff;
          line-height: 50px;
      }
      .icon {
        width: 52px;
        a {
          color: #ffffff;
        }
      }
  }
</style>