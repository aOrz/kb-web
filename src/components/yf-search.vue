<template>
  <div class="content">
    <div class="ui-logo"></div>
    <tips></tips>
    <search-course @changeschool="setSchool" school-name="school"></search-course>
    <div class="info">
        <p>查成绩、四六级、计算机、查自习教室、考试安排、校历。
	        <br> 请关注：烟风。
		</p>
    </div>
  </div>
</template>
<style scoped>
    .info {
        padding: 0 15px;
        margin-top: 20px;
        color: #cd8672;
    }
    .ui-logo {
        width: 100px;
        height: 100px;
        margin: 20px auto 10px auto;
        background-image: url(../assets/yf.jpg);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        border-radius: 60px;
    }
</style>
<script>
  import searchCourseComponent from './search_course';
  import tipsComponent from './tips';
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
      searchCourse: searchCourseComponent,
      tips: tipsComponent
    }
  }
</script>