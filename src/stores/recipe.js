import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useCurrentObject } from './currentObject'

export const useRecipeStore = defineStore('recipe', () => {
  const menuOpen = ref(false)

  const getMenuOpen = computed(() => menuOpen)

  function getNewRecipe() {
    return fetch(import.meta.env.VITE_API_URL + "/recipe/new")
  }

  function setNewRecipeAsCurrent() {
    var currentObject = useCurrentObject();
    getNewRecipe().then((data) => {
       return data.json();
    }).then((data => currentObject.currentObject = data));
  }

  return {
    menuOpen,
    getMenuOpen,
    setNewRecipeAsCurrent
  }

})
