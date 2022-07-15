import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlayerManager from '@/views/PlayerManager.vue'
import AddPlayer from '@/views/AddPlayer.vue'
import EditPlayer from '@/views/EditPlayer.vue'
import ViewPlayer from '@/views/ViewPlayer.vue' 
import PageNotFound from '@/views/PageNotFound.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    redirect: "/players",
    component: HomeView
  },
  {
    path: '/players',
    name: 'PlayerManager',
    component: PlayerManager
  },
  {
    path: '/players/add',
    name: 'AddPlayer',
    component: AddPlayer
  },
  
  {
    path: '/players/edit/:playerId',
    name: 'EditPlayer',
    component: EditPlayer
  },
  {
    path: '/players/view/:playerId',
    name: 'ViewPlayer',
    component: ViewPlayer
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
