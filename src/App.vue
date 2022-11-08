<script setup>
import {RouterView } from 'vue-router'
import { reactive } from 'vue'
import Menu from './components/Menu.vue'
import Header from './components/Header.vue'

import { useMenuStore } from "./stores/menu"
var menu = useMenuStore();

var classes = reactive({
  "toggle-sidebar": menu.getMenuOpen,

})




</script>

<template>
  <div :class="classes">
    <Header />

    <Menu></Menu>
    <RouterView />


    <!-- ======= Footer ======= -->
    <footer id="footer" class="footer">
      
    </footer><!-- End Footer -->

    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
        class="bi bi-arrow-up-short"></i></a>
  </div>
</template>

<style scoped>

</style>
