<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useMenuStore} from "../stores/menu"
import { reactive } from 'vue'
var menu = useMenuStore();
function toggleMenu(){
  menu.menuOpen = !menu.menuOpen;
}
function toggleSearch(){
  menu.searchOpen = !menu.searchOpen;
}

var classes = reactive({
  "search-bar": true,
  "search-bar-show": menu.getSearchOpen

})
</script>

<template>
  <!-- ======= Header ======= -->
  <header id="header" class="header fixed-top d-flex align-items-center">

    <div class="d-flex align-items-center justify-content-between">
      <a href="index.html" class="logo d-flex align-items-center">
        <img src="@/assets/img/logo.png" alt="">
        <span class="d-none d-lg-block">NiceAdmin</span>
      </a>
      <i @click="toggleMenu" class="bi bi-list toggle-sidebar-btn"></i>
    </div><!-- End Logo -->

    <div :class="classes">
      <div class="search-form d-flex align-items-center" method="POST" action="#">
        <div id="search-container">

        </div>
        <!-- <input type="text" name="query" placeholder="Search" title="Enter search keyword">
        <button type="submit" title="Search"><i class="bi bi-search"></i></button> -->
        </div>
    </div><!-- End Search Bar -->

    <nav class="header-nav ms-auto">
      <ul class="d-flex align-items-center">

        <li class="nav-item d-block d-lg-none" >
          <a class="nav-link nav-icon search-bar-toggle " @click="toggleSearch">
            <i class="bi bi-search"></i>
          </a>
        </li><!-- End Search Icon-->

        <li id="control-buttons" class="nav-item d-block" >
          
        </li><!-- End control buttons-->

      </ul>
    </nav><!-- End Icons Navigation -->

  </header><!-- End Header -->
</template>

<style scoped>

</style>
