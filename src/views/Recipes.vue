<script setup>
import { onMounted, reactive, watch, computed } from "vue";
import { useRecipeStore } from "../stores/recipe"
import SearchBar from '../components/SearchBar.vue'
import { useSearchStore } from "../stores/search"

const recipeStore = useRecipeStore();
const allRecipes = reactive([]);
const searchBar = useSearchStore();

onMounted(() => {
  if (searchBar.getQuery) {
    recipeStore.searchRecipes(searchBar.getQuery).then((data) => {
      data.map((item) => allRecipes.push(item))
    })
  } else {
    recipeStore.searchRecipes(null).then((data) => {
      data.map((item) => allRecipes.push(item))
    })
  }
})

watch(computed(() => searchBar.getQuery), function () {
  recipeStore.searchRecipes(searchBar.getQuery).then((data) => {
    allRecipes.splice(0, allRecipes.length)
    data.map((item) => allRecipes.push(item))
  })
})


</script>
<template>
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Form Layouts</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="index.html">Home</a></li>
          <li class="breadcrumb-item">Forms</li>
          <li class="breadcrumb-item active">Layouts</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->
    <section class="section dashboard">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <!-- Sales Card -->
            <div v-for="recipe in allRecipes" class="col-xxl-3 col-md-3">
              <RouterLink :to="{ name: 'recipe', params: { id: recipe.id }}">
                <div class="card info-card sales-card">

                  <div class="card-body">
                    <h6 class="card-title">{{recipe.name}}</h6>

                    <div class="d-flex align-items-center">
                      <div class="ps-3">
                        <h5>{{recipe.description}}</h5>
                      </div>
                    </div>
                  </div>

                </div>
              </RouterLink>
            </div><!-- End Sales Card -->

          </div>
        </div>
      </div>
    </section>
  </main>

  <Teleport to="#control-buttons">
    <RouterLink to="/newrecipe">
      <button class="btn btn-primary" style="margin-right:20px">Novi recepat</button>
    </RouterLink>
  </Teleport>

  <Teleport to="#search-container">
    <SearchBar></SearchBar>
  </Teleport>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
