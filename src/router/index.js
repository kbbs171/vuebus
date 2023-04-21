import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/page/layout'
import Index from '@/page/index'
import Chat from '@/page/chat'
import BusInfo from '@/page/busInfo'
import BusStationInfo from '@/page/busStationInfo'
import DriverInfo from '@/page/driverInfo'
import Manage from '@/page/manage'
import Login from "../page/login/login.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children:[{
        path:'/',
        name:'Index',
        component:Index
      },{
        path:'/chat',
        name:'Chat',
        component:Chat
      },{
        path:'/busInfo',
        name:'BusInfo',
        component:BusInfo
      },{
        path:'/busStationInfo',
        name:'BusStationInfo',
        component:BusStationInfo
      },{
        path:'/driverInfo',
        name:'DriverInfo',
        component:DriverInfo
      },{
        path:'/manage',
        name:'Manage',
        component:Manage
      }]
    },{
      path: '/login',
      name: 'Login',
      component:Login
    }
  ]
})
