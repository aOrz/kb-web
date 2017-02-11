<template>
  <div class="content">
    <search-course @changeschool="setSchool" school-name="school"></search-course>
    <search-query></search-query>
    <recommended v-for="links in schoolLinks" :links="links"></recommended>
    <recommended v-for="links in publicLinks" :links="links"></recommended>
    <duo-shuo :thread-key="threadKey"></duo-shuo>
  </div>
</template>
<style scoped>

</style>
<script>
  import duoshuoComponent from './duoshuo';
  import recommendedComponent from './recommended';
  import searchCourseComponent from './search_course';
  import searchQueryComponent from './search_query';
  import config from '../lib/config';

  import weui from 'weui.js';
  import Vue from 'vue';
  import VueResource from 'vue-resource';

  Vue.use(VueResource);
  
  export default {
    name: 'search',
    data () {
      return {
        school: this.$route.params.school ? this.$route.params.school : 'yd',
        threadKey: 'index',
        publicLinks: config.links.public_links
      }
    },
    computed: {
      schoolLinks () {
        return config.links[this.school];
      }
    },
    methods: {
      setSchool (school) {
        this.school = school;
      }
    },
    components: {
      duoShuo: duoshuoComponent,
      recommended: recommendedComponent,
      searchCourse: searchCourseComponent,
      searchQuery: searchQueryComponent
    }
  }
</script>