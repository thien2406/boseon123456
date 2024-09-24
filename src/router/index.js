import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path : '/',
        component: ()=>import('../components/test/index.vue'),
        props :true,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router