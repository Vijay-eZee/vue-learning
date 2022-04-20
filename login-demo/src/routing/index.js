const { createRouter, createWebHistory } = require("vue-router")
//import store from '../store'
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../components/Home.vue')

    },
    {
        path: '/About',
        name: 'about',
        component: () => import('../components/About.vue')
    },
    {
        path: '/Contact',
        name: 'contact',
        component: () => import('../components/Contact.vue')
    },
    {
        path: '/blogs',
        name: 'blogs',
        component: () => import('../components/blogs/'),
        // meta: { authRequired: true }
    },
     {
        path: '/blogs/blog/:blogId',
        name: 'detail',
        component: () => import('../components/blogs/Detail'),
       // meta: { authRequired: true }
    },
    // {
    //     path: '/Login',
    //     name: 'login',
    //     component: () => import('../components/auth/Login.vue'),
    //    // meta: { layout: 'AuthLayout' }
    // },
    // {
    //     path: '/Signup',
    //     name: 'signup',
    //     component: () => import('../components/auth/Signup.vue'),
    //    // meta: { layout: 'AuthLayout' }
    // },
    {
        path: '/:pathMatch(.*)',
        name: '404',
        component: () => import('../components/404/index.vue'),
      //  meta: { layout: 'ErrorLayout' }
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.authRequired)) {
//         console.log(store.getters.isAuthenticate)
//         if (!store.getters.isAuthenticate) {
//             next({
//                 name: 'home'
//             })
//         } else {
//             next()
//         }
//     } else {
//         next()
//     }
// })
export default router