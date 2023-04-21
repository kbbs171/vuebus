import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '首页',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/layout'),
    redirect:'/home',
    children:[
      {
        path: '/home',
        name: '首页',
        component: () => import('../views/home/index')
      },
      {
        path: '/notification',
        name: '公告管理',
        component: () => import('../views/notification/index')
      },
      {
        path: '/user',
        name: '用户管理',
        component: () => import('../views/user/index')
      },
      {
        path: '/product',
        name: '交易柜管理',
        component: () => import('../views/product/index')
      },
      {
        path: '/order',
        name: '聊天',
        component: () => import('../views/order/index')
      },
      {
        path: '/modifyPassword',
        name: '修改密码',
        component: () => import('../views/modifyPassword/index')
      },
      {
        path: '/addAdmin',
        name: '添加管理员',
        component: () => import('../views/addAdmin/index')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
