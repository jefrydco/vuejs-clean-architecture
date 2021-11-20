import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchResultPage from '../views/SearchResultPage.vue'

Vue.use(VueRouter)

const routes = [
  { name: 'SearchResultPage', path: '/result/:page', component: SearchResultPage }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
