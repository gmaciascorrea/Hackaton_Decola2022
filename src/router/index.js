import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompraView from '../views/CompraView.vue'
import VendaView from '../views/VendaView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/compra',
    name: 'compra',
    component: CompraView
  },
  {
    path: '/venda',
    name: 'venda',
    component: VendaView
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
