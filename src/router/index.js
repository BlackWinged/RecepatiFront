import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestContent from '../views/TestContent.vue'
import NewRecipe from '../views/NewRecipe.vue'
import NewIngredient from '../views/NewIngredient.vue'
import Ingredients from '../views/Ingredients.vue'
import Recipes from '../views/Recipes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TestContent
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: Recipes
    },
    {
      path: '/newrecipe',
      name: 'newrecipe',
      component: NewRecipe
    },
    {
      path: '/ingredients',
      name: 'ingredients',
      component: Ingredients
    },
    {
      path: '/newingredient',
      name: 'newingredient',
      component: NewIngredient
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
