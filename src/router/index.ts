import {createRouter, createWebHistory} from 'vue-router'
import BlogsView from "@/views/BlogsView.vue";
import LandingView from "@/views/LandingView.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'landing',
            component: LandingView
        },
        {
            path: '/blog/:id',
            name: 'blog',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/BlogView.vue')
        },

        {
            path: '/blog',
            name: 'blogs',
            component: () => import('../views/BlogsView.vue')
        },

         {
            path: '/contact-us',
            name: 'contact',
            component: () => import('../views/ContactView.vue')
        },
        ,

        {
            path: '/sign-up',
            name: 'signup',
            component: () => import('../views/SignupView.vue')
        },

        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue')
        },
    ]
})

export default router
