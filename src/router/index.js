import Vue from 'vue'
import Router from 'vue-router'
const CakeView = () => import('@/components/CakeView')
const CakeForm = () => import('@/components/CakeForm')
const CakeShow = () => import('@/components/CakeShow')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'cakes',
      component: CakeView
    },
    {
      path: '/add',
      name: 'cakes.add',
      component: CakeForm
    },
    {
      path: '/:id',
      name: 'cakes.show',
      component: CakeShow
    }
  ]
})
