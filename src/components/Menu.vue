<script setup>
import { reactive } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

var classes = reactive({
  "sidebar": true,
})
</script>

<template>
  <!-- ======= Sidebar ======= -->
  <aside id="sidebar" :class="classes">

    <ul class="sidebar-nav" id="sidebar-nav">

      <li class="nav-item">
        <RouterLink class="nav-link collapsed" to="/">
          <i class="bi bi-grid"></i>
          <span>Dashed board</span>
        </RouterLink>
      </li><!-- End Dashboard Nav -->
      <li class="nav-item">
        <RouterLink class="nav-link collapsed" to="/recipes">
          <i class="bi bi-grid"></i>
          <span>Recepati</span>
        </RouterLink>
      </li><!-- End Dashboard Nav -->
      <li class="nav-item">
        <RouterLink class="nav-link collapsed" to="/ingredients">
          <i class="bi bi-grid"></i>
          <span>Sastojci</span>
        </RouterLink>
      </li><!-- End Dashboard Nav -->
      <li class="nav-item">
        <RouterLink class="nav-link collapsed" to="/fridge">
          <i class="bi bi-grid"></i>
          <span>Frižider</span>
        </RouterLink>
      </li><!-- End Dashboard Nav -->
    </ul>

  </aside><!-- End Sidebar-->
</template>

<style scoped>

</style>
