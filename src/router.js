import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import BlogPost from './components/BlogPost.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/blog/:id', component: BlogPost, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router