import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import searchComponent from 'components/search';
import donateComponent from 'components/donate'

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
    }
  ]
})
