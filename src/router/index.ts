import {createRouter, createWebHistory} from 'vue-router'
import BlogsView from "@/views/BlogsView.vue";
import LandingView from "@/views/LandingView.vue";
import {auth} from "@/firebase/config";


// @ts-ignore
const requireAuth = (to, from, next) => {
    let user = auth.currentUser
    if (!user) {
        next({name: 'login'})
        console.log(user)
    } else {
        next()
    }
}

// @ts-ignore
const userAuth = (to, from, next) => {
    let user = auth.currentUser
    if (user) {
        next({name: 'app'})
    } else {
        next()
    }
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'landing',
            component: LandingView,
            beforeEnter: userAuth
        },
        {
            path: '/blog/:id',
            name: 'blog',
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

        {
            path: '/sign-up',
            name: 'signup',
            component: () => import('../views/SignupView.vue'),
            beforeEnter: userAuth

        },

        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue'),
            beforeEnter: userAuth

        },
        {
            path: '/app',
            name: 'app',
            component: () => import('../views/AppView.vue'),
            beforeEnter: requireAuth
        },
    ]
})

export default router
