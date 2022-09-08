import Vue from "vue";
import VueRouter from 'vue-router'
import Main from '../Views/Main'
import User from '../Views/User'
import Home from '../Views/Home'

Vue.use(VueRouter)



const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Main',
        component: Main,
        children:[
            {
                path: '/',
                name: 'home',
                component: Home
            },{
                path: '/user',
                name: 'user',
                component: User
            }
        ]
    }]
})

export default router