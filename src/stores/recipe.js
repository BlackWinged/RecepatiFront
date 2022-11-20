import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getRequest, postRequest } from '../code/ajaxRequest';

export const useRecipeStore = defineStore('recipe', () => {

  function getNewRecipe() {
    return getRequest("/recipe/new")
  }

  function getRecipe(id) {
    return getRequest("/Recipe/byId/" + id)
  }

  function searchRecipes(query) {
    if (query) {
      return getRequest("/recipe/", { query: query });
    } else {
      return getRequest("/recipe/");
    }
  }

  function saveRecipe(recipe) {
    postRequest("/recipe", recipe);
  }


  return {
    getNewRecipe,
    getRecipe,
    searchRecipes,
    saveRecipe
  }

})
