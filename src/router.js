import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('./views/Home.vue')
const About = () => import('./views/About.vue')
const Clock = () => import('./views/Clock.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/clock',
      name: 'clock',
      component: Clock
    }
  ],
  mode: 'history',
  linkActiveClass: 'active'
})
