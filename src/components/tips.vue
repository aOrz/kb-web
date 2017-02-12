<template>
  <section v-if="isShow">
    <p>{{tips}} <span @click="closeTips()" class="close"></span></p>
  </section>
</template>
<script>
  export default {
    name: 'tips',
    props: {
      tips: String
    },
    data () {
      return {
        isShow: true
      }
    },
    methods: {
      closeTips() {
        this.isShow = false;
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