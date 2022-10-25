import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  const menuOpen = ref(false)
  const searchOpen = ref(false)

  const getMenuOpen =  computed(() => menuOpen)
  const getSearchOpen =  computed(() => searchOpen)
  return { 
    menuOpen,
    getMenuOpen,
    searchOpen,
    getSearchOpen
  }
})
