import Home from "../pages/HomePage.vue";
import About from "../pages/AboutPage.vue";
import Products from "../pages/product/ProductsPage.vue";
import CreateProduct from "../pages/product/CreatePage.vue";
import EditProduct from "../pages/product/EditPage.vue";
import Register from "../pages/RegisterPage.vue";
import Login from "../pages/LoginPage.vue";
import ImagePage from "../pages/imagePage.vue";
import ItemsPage from "../pages/ItemPage.vue";
import ItemList from "../pages/ItemLists.vue";
import WomanPage from "../pages/woman/WomanPage.vue";
import CreateWomanPage from "../pages/woman/WomanCreatePage.vue";
import ContactPage from "../pages/ContactPage.vue";
import ServicePage from "../pages/service/ServicePage.vue";
import CreateServicePage from "../pages/service/CreateServicePage.vue";
import AdminDashboard from "../pages/AdminDashboard.vue"
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/products",
    name: "products",
    component: Products,
  },
  {
    path: "/create-product",
    name: "create-product",
    component: CreateProduct,
  },
  {
    path: "/edit-product",
    name: "edit-product",
    component: EditProduct,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/image",
    name: "image",
    component: ImagePage,
  },
  {
    path: "/items",
    name: "items",
    component: ItemsPage,
  },
  {
    path: "/list-item",
    name: "list-item",
    component: ItemList,
  },
  {
    path: "/womanproduct",
    name: "womanproduct",
    component: WomanPage,
  },
  {
    path: "/create-womanprod",
    name: "create-womanprod",
    component: CreateWomanPage,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactPage,
  },
  {
    path: "/services",
    name: "services",
    component: ServicePage,
  },
  {
    path: "/create-service",
    name: "create-service",
    component: CreateServicePage,
  },
  {
    path: "/admin",
    name: "admin",
    meta: {
      isAdmin: true,
    },
    component: AdminDashboard,
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes
  });

  router.beforeEach((to, from, next) => {
    onAuthStateChanged(getAuth(), async (user) => {
      const shouldBeLoggedIn = (record) =>
        record.meta.isAuthenticated || record.meta.isAdmin;
  
      if (to.matched.some((record) => shouldBeLoggedIn(record))) {
        if (!user) {
          next("/login");
        } else {
          const tokenResult = await getAuth().currentUser.getIdTokenResult();
          const isAdmin = tokenResult.claims.admin;
          if (isAdmin && to.matched.some((record) => !record.meta.isAdmin)) {
            next("/admin");
          } else if (to.matched.some((record) => record.meta.isAdmin)) {
            if (!tokenResult.claims.admin) {
                alert('You are not authorized to access this page.');
              next("/");
            } else {
              next();
            }
          } else {
            next();
          }
        }
      } else {
        next();
      }
    });
  });
  

export default router;
