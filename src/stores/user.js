import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {

  const currentUserToken = ref("");
  const isLoggedIn = computed(() => {

  })
  function logIn(user) {
    fetch(import.meta.env.VITE_API_URL + "/User/LogIn/", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
      mode: 'cors',
      cache: 'default',
      credentials: 'include'
    })
  }

  function register(user) {
    fetch(import.meta.env.VITE_API_URL + "/User/Register/", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
      mode: 'cors',
      cache: 'default'
    })
  }

  function validate(token) {
    fetch(import.meta.env.VITE_API_URL + "/User/validate/", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
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
