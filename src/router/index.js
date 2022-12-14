import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestContent from '../views/TestContent.vue'
import NewRecipe from '../views/NewRecipe.vue'
import NewIngredient from '../views/NewIngredient.vue'
import Ingredients from '../views/Ingredients.vue'
import Recipes from '../views/Recipes.vue'
import Recipe from '../views/Recipe.vue'
import EditRecipe from '../views/EditRecipe.vue'
import Ingredient from '../views/Ingredient.vue'
import EditFridge from '../views/EditFridge.vue'
import NewFridgeIngredient from '../views/NewFridgeIngredient.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

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
      path: '/ingredient/:id',
      name: 'ingredient',
      component: Ingredient
    },
    {
      path: '/recipe/:id',
      name: 'recipe',
      component: Recipe
    },
    {
      path: '/editrecipe/:id',
      name: 'editrecipe',
      component: EditRecipe
    },
    {
      path: '/fridge',
      name: 'fridge',
      component: EditFridge
    },
    {
      path: '/newfridgeingredient',
      name: 'newfridgeingredient',
      component: NewFridgeIngredient
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    }
  ]
})

export default router
