import { createRouter, createWebHistory } from 'vue-router'

import Homepage from '../views/HomepageView.vue'
import Quiz from '../views/QuizView.vue'
import ContributeGuide from '../views/ContributeGuideView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Homepage
    },
    {
      path: '/quiz',
      name: 'Quiz',
      component: Quiz
    },
    {
      path: '/contribute',
      name: 'contribute',
      component: ContributeGuide
    }
  ]
})

export default router
