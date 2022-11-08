import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFridgeStore = defineStore('fridge', () => {

  function getFridgeForCurrentUser() {
    return fetch(import.meta.env.VITE_API_URL + "/fridge/currentuser/")
      .then((data) => {
        if (!data.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || data.status;
          return Promise.reject(error);
        }
        return data.json()
      })
      .catch(error => {
        // var router = useRouter();
        // if (error == 403){
        //   router.push({ name: 'login', params: { id: currentObject.id } })  
        // }
        
      })
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

  function saveFridgeIngredient(fridgeIngredient) {
    fetch(import.meta.env.VITE_API_URL + "/fridge/saveingredient", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fridgeIngredient),
      mode: 'cors',
      cache: 'default'
    })
  }


  return {
    getFridgeForCurrentUser,
    saveFridge,
    getNewFridgeIngredient,
    saveFridgeIngredient
  }

})
