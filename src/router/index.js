import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import searchComponent from 'components/search';
// import donateComponent from 'components/donate';
// import courseTableComponent from 'components/course_table';
// import calendarComponent from 'components/calendar';
const calendarComponent = resolve => {
  require.ensure(['../components/calendar.vue'], () => {
    resolve(require('../components/calendar.vue'))
  })
}

const courseTableComponent = resolve => {
  require.ensure(['../components/course_table.vue'], () => {
    resolve(require('../components/course_table.vue'))
  })
}

const donateComponent = resolve => {
  require.ensure(['../components/donate.vue'], () => {
    resolve(require('../components/donate.vue'))
  })
}

export default new Router({
  routes: [
    {
      path: '/:title/:school/:academe',
      name: 'Search',
      component: searchComponent
    },
    {
      path: '/',
      name: 'Searchs',
      component: searchComponent
    },
    {
      path: '/donate',
      name: 'donate',
      component: donateComponent
    },
    {
      path: '/course_table/:school/:academe/:class_name',
      name: 'course_table',
      component: courseTableComponent
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: calendarComponent
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
