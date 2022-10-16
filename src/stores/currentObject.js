import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCurrentObject = defineStore('currentObject', () => {
  const currentObject = ref({});

  const getCurrentObject = computed(() => currentObject)
  return {
    currentObject,
    getCurrentObject
  }

  
})
