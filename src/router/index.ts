import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import InitialView from '../views/InitialView.vue'
import SignInView from '../views/SignInView.vue'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import MessageView from '../views/MessageView.vue'
import ProfileView from '../views/ProfileView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'initial',
    component: InitialView
  },
  {
    path: '/signin',
    name: 'singnin',
    component: SignInView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/message',
    name: 'message',
    component: MessageView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
