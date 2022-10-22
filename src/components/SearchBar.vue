<script setup>
import { reactive } from 'vue';
import { useSearchStore } from '../stores/search'

const searchBar = useSearchStore();

</script>

<template>
  <input type="text" v-model="searchBar.searchQuery" name="query" placeholder="Search" title="Enter search keyword">
  <button type="submit" title="Search"><i class="bi bi-search"></i></button>
</template>

<style scoped>

</style>
