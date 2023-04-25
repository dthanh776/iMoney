import { createRouter, createWebHistory } from "vue-router";
import { auth } from "@/configs/firebase";

const requireAuth = (to, from, next) => {
    const user = auth.currentUser;
    if (!user) {
        next({ name: "Login", params: {} });
    } else next();
};

const routes = [
    {
        path: "/",
        name: "Home",
        meta: {
            text: "Hey, Duy Thanh",
            leading: true,
            isShowFooter: true,
        },
        component: () =>
            import(/* webpackChuckName: "home" */ "../views/homeView.vue"),
    },
    {
        path: "/register",
        name: "Register",
        meta: {
            layout: "auth",
        },
        component: () =>
            import(
                /* webpackChuckName: "register" */ "../views/registerView.vue"
            ),
    },
    {
        path: "/login",
        name: "Login",
        meta: {
            layout: "auth",
        },
        component: () =>
            import(/* webpackChuckName: "login" */ "../views/loginView.vue"),
    },
    {
        path: "/profile",
        name: "Profile",
        meta: {
            text: "My Profile",
            leading: false,
            isShowFooter: true,
        },
        component: () =>
            import(
                /* webpackChuckName: "profile" */ "../views/profileView.vue"
            ),
        beforeEnter: requireAuth,
    },
    {
        path: "/logout",
        name: "Logout",
        component: () =>
            import(/* webpackChuckName: "logout" */ "../views/logoutView.vue"),
    },
    {
        path: "/report",
        name: "Report",
        meta: {
            text: "Report",
            leading: false,
            isShowFooter: true,
        },
        component: () =>
            import(/* webpackChuckName: "report" */ "../views/reportView.vue"),
    },
    {
        path: "/budget",
        name: "Budget",
        meta: {
            text: "Budget",
            leading: false,
            isShowFooter: true,
        },
        component: () =>
            import(/* webpackChuckName: "budget" */ "../views/budgetView.vue"),
    },
    {
        path: "/new-transaction",
        name: "NewTransaction",
        meta: {
            text: "Add Transaction",
            isShowFooter: true,
        },
        component: () =>
            import(
                /* webpackChuckName: "transaction" */ "../views/new-transactionView.vue"
            ),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
