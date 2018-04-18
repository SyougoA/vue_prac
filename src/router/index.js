import Vue from 'vue'
import Router from 'vue-router'
import cont from '@/components/cont'
import room from '@/components/room'
import tweet from '@/components/tweet'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'cont',
      component: cont
    },
    {
      path: '/room',
      name: 'room',
      component: room,
      children: [
        { path: 'tweet', component: tweet }
      ]
    }
  ]
})
