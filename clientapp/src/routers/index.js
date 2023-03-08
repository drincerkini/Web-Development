import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/HomePage.vue';
import About from '../pages/AboutPage.vue';
import Products from '../pages/product/ProductsPage.vue';
import CreateProduct from '../pages/product/CreatePage.vue';
import EditProduct from '../pages/product/EditPage.vue';
import Register from '../pages/RegisterPage.vue';
import Login from '../pages/LoginPage.vue';
import ImagePage from '../pages/imagePage.vue';
import ItemsPage from '../pages/ItemPage.vue'
import ItemList from '../pages/ItemLists.vue';
import WomanPage from '../pages/woman/WomanPage.vue';

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
    },
    {
        path:'/register',
        name: 'register',
        component: Register
    },
    {
        path:'/login',
        name: 'login',
        component: Login
    },
    {
        path:'/image',
        name: 'image',
        component: ImagePage
    },
    {
        path:'/items',
        name: 'items',
        component: ItemsPage
    },
    {
        path:'/list-item',
        name: 'list-item',
        component: ItemList
    },
    {
        path:'/womanproduct',
        name: 'womanproduct',
        component: WomanPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;