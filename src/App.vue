<template>
  <div id="app">
    <div class="content">
      <header>
        <Header-items></Header-items>
      </header>
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

<style type="text/scss" scoped>
  header {
    position: fixed;
    top: 0;
    height: 50px;
    z-index: 100;
    width: 100%;
  }
  html, body, #app {
    height: 100%;
  }
  .content {
    padding-top: 25px;
    box-sizing: border-box;
    min-height: 100%;
    height: auto;
    margin: 0 auto;
  }
  .content:after {
      content: '';
      display: block;
      width: 100%;
      height: 50px;
      clear: both;
    }
</style>
