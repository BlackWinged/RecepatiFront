import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRecipeStore = defineStore('recipe', () => {
  
  function getNewRecipe() {
    return fetch(import.meta.env.VITE_API_URL + "/recipe/new")
    .then((data) => data.json());
  }

  function getRecipe(id) {
    return fetch(import.meta.env.VITE_API_URL + "/Recipe/byId/" + id, {
      credentials: 'include',
      mode: 'cors',
    })
    .then((data) => data.json());
  }

  function searchRecipes(query) {
    if (query)
      return fetch(import.meta.env.VITE_API_URL + "/recipe?query=" + query, {
        credentials: 'include',
        mode: 'cors',
      })
        .then((data) => {
          return data.json();
        });
    else
      return fetch(import.meta.env.VITE_API_URL + "/recipe", {
        credentials: 'include',
        mode: 'cors',
      })
        .then((data) => {
          return data.json();
        });
  }
  
  function saveRecipe(recipe) {
    fetch(import.meta.env.VITE_API_URL + "/recipe/", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipe),
      mode: 'cors',
      cache: 'default'
    })
  }


  return {
    getNewRecipe,
    getRecipe,
    searchRecipes,
    saveRecipe
  }

})
