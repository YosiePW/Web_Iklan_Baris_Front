import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomeUser from '../views/HomeUser.vue'
import Footer from '../views/layouts/Footer.vue'
import Navbar from '../views/layouts/Navbar.vue'
import Detail from '../views/Detail.vue'
import FormIklan from '../views/FormIklan.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import IklanSaya from '../views/IklanSaya.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'register',
    components: {default: Register}
  },
  {
    path: '/login',
    name: 'login',
    components: {default: Login}
  },
  {
    path: '/home',
    name: 'home',
    components: {default: Home}
  },
  {
    path: '/',
    name: 'homeuser',
    components: {default: HomeUser, header: Navbar, footer: Footer},
    // meta: { 
    //   requiresAuth: true
    // }
  },
  {
    path: '/iklan',
    name: 'iklan',
    components: {default: IklanSaya, header: Navbar},
    // meta: { 
    //   requiresAuth: true
    // }
  },
  {
    path: '/detail',
    name: 'detail',
    components: {default: Detail, header: Navbar, },
    // meta: { 
    //   requiresAuth: true
    // }
  },
  {
    path: '/form',
    name: 'form',
    components: {default: FormIklan, header: Navbar},
    // meta: { 
    //   requiresAuth: true
    // }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

export default router
