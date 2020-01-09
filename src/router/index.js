import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/login"),
      meta: {
        title: "登录"
      }

    },
    {
      path: '/index',
      name: 'Index',
      component: () => import("../views/Index"),
      children:[
        {
          path: "/home",
          name: "Home",
          component: () => import("../views/nav01/Home"),
          meta: {
            title: '进销存'
          },
          children:[
            {
              path:'/tap01',
              name:'Tap01',
              component: () => import("../views/nav01/Tap01"),
            },
            {
              path:'/tap02',
              name:'Tap02',
              component: () => import("../views/nav01/Tap02"),
            },
            {
              path:'/tap03',
              name:'Tap03',
              component: () => import("../views/nav01/Tap03"),
            }
          ]
        },
        {
          path: "/people",
          name: "People",
          component: () => import("../views/nav02/People"),
          meta: {
            title: '成员管理'
          },
        },
      ]
    },
   
  ]
})

export default router;