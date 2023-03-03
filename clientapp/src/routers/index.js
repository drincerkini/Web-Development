import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/HomePage.vue';
import About from '../pages/AboutPage.vue';
import Products from '../pages/product/ProductsPage.vue';
import CreateProduct from '../pages/product/CreatePage.vue';
import EditProduct from '../pages/product/EditPage.vue';

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
    },
    {
        path:'/create-product',
        name: 'create-product',
        component: CreateProduct
    },
    {
        path:'/edit-product',
        name: 'edit-product',
        component: EditProduct
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;