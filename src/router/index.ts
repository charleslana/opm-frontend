import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import HallOfFameView from '../views/HallOfFameView.vue';
import ContactView from '../views/ContactView.vue';

const routes: Array<RouteRecordRaw> = [{
    path: '/', name: 'home', component: HomeView
}, {
    path: '/news', name: 'news', // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NewsView.vue')
}, {
    path: '/hall-of-fame', name: 'hall-of-fame', component: HallOfFameView
}, {
    path: '/contact', name: 'contact', component: ContactView
},]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes, scrollBehavior() {
        window.scrollTo(0, 0);
    }
})

export default router;
