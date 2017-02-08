<template>
  <div id="app">
    <Header-items></Header-items>
    <router-view></router-view>
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

<style>
</style>
