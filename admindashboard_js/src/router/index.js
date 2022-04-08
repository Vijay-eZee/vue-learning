import store from "@/store"

const { createRouter, createWebHistory } = require("vue-router")

const routes=[
    // {
    //   path:"",
    //   name:'default',
    //   component:require('@/views/Default.vue').default,
    // },
    {
        path:"/",
        name:'login',
        component:()=>import(/*webpackChunkName:"login"*/'@/views/Login.vue')
      },
      {
        path:"/signup",
        name:'signup',
        component:()=>import(/*webpackChunkName:"signup"*/'@/views/SignUp.vue')
      },
    {
        path:'/admin',
        name:'home',
        component:()=>import(/*webpackChunkName:"admin"*/'@/views/Home.vue'),
        meta:{layout:'admin-layout',requiresAuth:false}
    },
    {
        path:'/admin/settings',
        name:'settings',
        component:()=>import(/*webpackChunkName:"settings"*/'@/views/Setting.vue'),
        meta:{layout:'admin-layout',requiresAuth:false}
    },
    {
        path:'/admin/change-password',
        name:'changePassword',
        component:()=>import('@/views/ChangePassword.vue'),
        meta:{layout:'admin-layout'}
    },
    {
        path:'/:pathMatch(.*)*',
        name:'404*',
        component:require('@/views/404.vue').default
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
router.beforeEach((to,from,next)=>{
    if(to.matched.some(record=>record.meta.requiresAuth)){
      if(!store.state.isLogin){
       next({
           name:'login'
       })
      }else{
        next()
      }
    }else{
        next()
    }
})
export default router