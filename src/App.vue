<template>
  <div id="app">
    <div class="content">
      <Header-items></Header-items>
      <router-view></router-view>
    </div>
    <FooterElm></FooterElm>
  </div>
</template>
<script>
import Header from './components/header';
import Footer from './components/footer';

export default {
  name: 'app',
  components: {
    HeaderItems: Header,
    FooterElm: Footer
  }
}
</script>

<style type="text/scss">
  html, body, #app {
    height: 100%;
  }
  .content {
    min-height: 100%;
    height: auto;
  }
  .content:after {
      content: '';
      display: block;
      width: 100%;
      height: 41px;
      clear: both;
    }
</style>
