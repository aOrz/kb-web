import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Search from 'components/search'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search
    }
  ]
})
