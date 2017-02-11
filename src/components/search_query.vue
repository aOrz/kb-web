<template>
  <section class="search-query">
    <input type="text" v-model="searchString" class="weui-input" placeholder="输入内容选择引擎搜索-下~">
    <select v-model="url" class="weui-select" @change="search">
      <option value="">选择引擎</option>
      <option v-for="link in searchServices" :value="link.url">{{link.name}}</option>
    </select>
  </section>
</template>
<script type="text/javascript">
  import config from '../lib/config';

  export default {
    data () {
      return {
        searchString: '',
        url: '',
        searchServices: config.searchServer
      }
    },
    methods: {
      search () {
        window.location.href = this.url + this.searchString;
      }
    }
  }
</script>
<style type="text/css" lang="scss" scoped>
  .search-query {
    padding: 0 15px;
    text-align: center;
    margin: 20px 0 30px 0;
    input {
      width: 60%;
      height: 34px;
      padding: 2px;
      border: 1px solid #d9d9d9;
      border-right: none;
    }
    select {
      width: auto;
      padding: 0 4px;
      border: 1px solid #d9d9d9;
      border-radius: 0 4px 4px 0;
      vertical-align: bottom;
    }
    .weui-select {
      height: 40px;
      line-height: 38px;
      margin-left: -5px;
    }
  }
</style>