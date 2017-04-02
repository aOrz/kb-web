<template>
  <section v-if="isShow">
    <p><a :href="tips.href">{{tips.text}}</a> <span @click="closeTips()" class="close"></span></p>
  </section>
</template>
<script>
  export default {
    name: 'tips',
    props: {
      tips: Object
    },
    data () {
      return {
        isShow: this.tips.id != localStorage['id']
      }
    },
    methods: {
      closeTips() {
        this.isShow = false;
        localStorage.id = this.tips.id;
        _hmt.push(['_trackEvent', 'closeTips', 'picker', `1`]);
      }
    }
  }
</script>
<style type="text/css" lang="scss" scoped>
  section {
    margin: 10px 15px;
    border-radius: 4px;
    background-color: rgba(254, 198, 47, .3);
    p {
      color: #1aad19;
      font-size: 14px;
      line-height: 1.5em;
      padding: 5px 8px;
      position: relative;
      a {
        color: #1aad19;
      }
      .close {  
        width: 14px;  
        height: 14px;  
        position: absolute;
        right: 10px;
        top: 7px;  
      }  
      .close:before, .close:after {  
        content: '';  
        position: absolute;  
        top: 50%;  
        width: 14px;  
        height: 1px;  
        background-color: #888;  
        -webkit-transform: rotate(45deg);  
        transform: rotate(45deg);
      }  
      .close:after {  
        -webkit-transform: rotate(-45deg);  
        transform: rotate(-45deg);  
      }  
    }
  }
</style>