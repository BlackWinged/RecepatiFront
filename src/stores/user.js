import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { postRequest } from '../code/ajaxRequest';

export const useUserStore = defineStore('user', () => {

  const currentUserToken = ref("");
  const isLoggedIn = computed(() => {

  })
  function logIn(user) {
    postRequest("/User/LogIn/", user)
  }

  function register(user) {
    postRequest("/User/Register/", user)
  }

  function validate(token) {
    fetch(import.meta.env.VITE_API_URL + "/User/validate/", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(token),
      mode: 'cors',
      cache: 'default'
    }).then(x => json(data))
    .then(x => isLoggedIn.value = true)
  }

  return {
    logIn,
    isLoggedIn,
    currentUserToken,
    validate,
    register

  }

})
