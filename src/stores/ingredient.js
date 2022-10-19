import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { reactive } from 'vue';

export const useIngredientStore = defineStore('ingredient', () => {

  const currentIngredient = ref({});

  function getNewIngredient() {
    return fetch(import.meta.env.VITE_API_URL + "/ingredient/new")
      .then((data) => {
        return data.json();
      });
  }

  function setNewIngredientAsCurrent() {
    getNewIngredient().then((data => currentIngredient = data));
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

  function searchIngredients(query) {
    if (query)
      return fetch(import.meta.env.VITE_API_URL + "/ingredient?query=" + query)
        .then((data) => {
          return data.json();
        });
    else
      return fetch(import.meta.env.VITE_API_URL + "/ingredient")
        .then((data) => {
          return data.json();
        });
  }

  return {
    setNewIngredientAsCurrent,
    getNewIngredient,
    saveIngredient,
    saveCurrentIngredient,
    searchIngredients,
    currentIngredient
  }

})
