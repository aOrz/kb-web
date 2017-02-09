<template>
  <div class="weui-tab">
      <div class="weui-navbar">
          <div v-for="(item, index) in items" class="weui-navbar__item" v-bind:class="{'weui-bar__item_on':selected == index}">
            <a :href="item.href" @click="go(index)">{{item.text}}</a>
          </div>
      </div>
      <div class="weui-tab__panel">
      </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        items: [{
          text: '下载课表',
          href: '//a.app.qq.com/o/simple.jsp?pkgname=io.dcloud.H5291D2691'
        },
        {
          text: '课程表',
          href: '#/'
        },
        // {
        //   text:'空教室', 
        //   href: '#/'
        // },
        {
          text: '打赏',
          href: '#/donate.html'
        }],
        selected: 1
      }
    },
    methods: {
      go (index) {
        this.selected = index;
      }
    }
  }
</script>
<style type="text/css" scoped>
  a {
    color: #000000;
  }
</style>