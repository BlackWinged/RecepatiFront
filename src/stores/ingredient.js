import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useCurrentObject } from './currentObject'

export const useIngredientStore = defineStore('ingredient', () => {
  
  

  function getNewIngredient() {
    return fetch(import.meta.env.VITE_API_URL + "/ingredient/new")
  }

  function setNewIngredientAsCurrent() {
    var currentObject = useCurrentObject();
    getNewIngredient().then((data) => {
       return data.json();
    }).then((data => currentObject.currentObject = data));
  }

  function saveIngredient(ingredient) {
    fetch(import.meta.env.VITE_API_URL + "/ingredient/", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ingredient),
      mode: 'cors',
      cache: 'default'
    })
  }

  function saveCurrentIngredient(ingredient) {
    var currentObject = useCurrentObject();
    saveIngredient(currentObject.currentObject)
  }

  return {
    setNewIngredientAsCurrent,
    getNewIngredient,
    saveIngredient,
    saveCurrentIngredient
  }

})
