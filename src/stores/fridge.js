import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFridgeStore = defineStore('fridge', () => {
  
  function getFridgeForCurrentUser() {
    return fetch(import.meta.env.VITE_API_URL + "/fridge/currentuser/")
    .then((data) => data.json());
  }

  function getNewFridgeIngredient() {
    return fetch(import.meta.env.VITE_API_URL + "/fridge/Ingredient/new")
    .then((data) => data.json());
  }

  function saveFridge(fridge) {
    fetch(import.meta.env.VITE_API_URL + "/fridge/savecurrentuser", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fridge),
      mode: 'cors',
      cache: 'default'
    })
  }


  return {
    getFridgeForCurrentUser,
    saveFridge,
    getNewFridgeIngredient
  }

})
