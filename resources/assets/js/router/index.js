import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '../components/Welcome'
import Home from '../components/Home'
import Login from '../components/Login'
import Signup from '../components/Signup'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Welcome',
            component: Welcome
        }, {
            path: '/home',
            name: 'Home',
            component: Home
        }, {
            path: '/login',
            name: 'Login',
            component: Login
        }, {
            path: '/signup',
            name: 'Signup',
            component: Signup
        }
    ],
    // mode: "history"
})
