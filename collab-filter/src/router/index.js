import Vue from 'vue'
import Router from 'vue-router'
import Products from '@/components/Products'
import Recommendations from '@/components/Recommendations'
import Users from '@/components/Users'

Vue.use(Router)

const routes = [
    {
        path: '/users',
        component: Users,
    },
    {
        path: '/products',
        component: Products,
    },
    {
        path: '/recommendations',
        component: Recommendations,
    }
];
