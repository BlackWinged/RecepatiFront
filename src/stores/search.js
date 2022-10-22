import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', () => {
  
  const searchQuery = ref("");

  const getQuery = computed(() => searchQuery.value);

  return {
    searchQuery,
    getQuery
  }

})
