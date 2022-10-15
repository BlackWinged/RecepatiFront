import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  const menuOpen = ref(false)

  const getMenuOpen =  computed(() => menuOpen)
  return { 
    menuOpen,
    getMenuOpen
  }
})
