import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../components/Landing";
Vue.use(VueRouter);

const routes = [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
        path: "/products",
        name: "products",
        component: () => import("../components/Products")
    },
    {
        path: "/product/:id",
        name: "product",
        component: () => import("../components/Product")
    },

    {
        path: "/payment/:total",
        name: "payment",
        component: () => import("../components/PaymentForm")
    },
    {
        path: "/success",
        name: "payment",
        component: () => import("../components/Success")
    },
    {
        path: "/fail",
        name: "payment",
        component: () => import("../components/Fail")
    },

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
