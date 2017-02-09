import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import searchComponent from 'components/search';
import donateComponent from 'components/donate';
import courseTableComponent from 'components/course_table';

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Search',
      component: searchComponent
    },
    {
      path: '/donate.html',
      name: 'donate',
      component: donateComponent
    },
    {
      path: '/course_table.html/:school/:academe/:class_name',
      name: 'course_table',
      component: courseTableComponent
    }
  ]
})
