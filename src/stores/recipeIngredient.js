import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRecipeIngredientStore = defineStore('recipeIngredient', () => {
  
  function getNewRecipeIngredient() {
    return fetch(import.meta.env.VITE_API_URL + "/recipe/ingredient/new")
    .then((data) => data.json());
  }

  return {
    getNewRecipeIngredient
  }

})
