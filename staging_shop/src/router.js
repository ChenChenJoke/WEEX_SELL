/* global Vue */
import Router from 'vue-router'
import index from '@/components/index.vue'
import detail from '@/components/detail.vue'


Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },

    {
      path: '/index',
      name: 'index',
      component: index
    },

    {
      path: '/detail',
      name: 'detail',
      component: detail
    }
  ]
})
