import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/HomePage.vue';
import About from '../pages/AboutPage.vue';
import Products from '../pages/ProductsPage.vue';

const routes = [
    {
        path:'/',
        name: 'home',
        component: Home
    },
    {
        path:'/about',
        name: 'about',
        component: About
    },
    {
        path:'/products',
        name: 'products',
        component: Products
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;