import {createRouter, createWebHistory} from 'vue-router'
import BlogsView from "@/views/BlogsView.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'blogs',
            component: BlogsView
        },
        {
            path: '/blog/:id',
            name: 'blog',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/BlogView.vue')
        }
        ,
        {
            path: '/sign-up',
            name: 'signup',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/SignupView.vue')
        }
    ]
})

export default router
