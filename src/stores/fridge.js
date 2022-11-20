import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getRequest, postRequest } from '../code/ajaxRequest';

export const useFridgeStore = defineStore('fridge', () => {

  function getFridgeForCurrentUser() {
    return getRequest("/fridge/currentuser/")
  }

  function getNewFridgeIngredient() {
    getRequest("/fridge/Ingredient/new");
  }

  function saveFridge(fridge) {
    postRequest("/fridge/savecurrentuser", fridge)
  }

  function saveFridgeIngredient(fridgeIngredient) {
    postRequest("/fridge/saveingredient", fridgeIngredient)
  }


  return {
    getFridgeForCurrentUser,
    saveFridge,
    getNewFridgeIngredient,
    saveFridgeIngredient
  }

})
