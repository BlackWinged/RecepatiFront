<script setup>
import { onMounted, ref, reactive, watch, computed } from "vue";
import { useFridgeStore } from "../stores/fridge"
import IngredientRecipeSelect from "../components/selects/IngredientRecipeSelect.vue"
import SearchBar from '../components/SearchBar.vue'
import { useSearchStore } from "../stores/search"
import { onBeforeRouteUpdate } from 'vue-router'

const fridgeStore = useFridgeStore();
const searchBar = useSearchStore();
const currentObject = ref({});

onBeforeRouteUpdate((to, from) => {

})

fridgeStore.getFridgeForCurrentUser()
  .then((data) => currentObject.value = data);


function addIngredient() {
  fridgeStore.getNewFridgeIngredient().then((data) =>
    currentObject.value.contents.push(data)
  );
}

function saveCurrentObject(savedObject) {
  fridgeStore.saveFridge(savedObject)
}

var ingredients = computed(() =>{
  if (searchBar.getQuery) {
    return currentObject.value.contents.filter((item) => {
      return item.name.toLowerCase().includes(searchBar.getQuery.toLowerCase())
    })
  } else {
    return currentObject.value.contents;
  }
})

watch(computed(() => currentObject.value.contents), () => {
  saveCurrentObject(currentObject.value)
},
{deep: true}
)

onMounted(() => {

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
    <section class="section">
      <div class="row">
        <div class="col-lg-8">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Kaj imam u friđu</h5>

              <!-- Floating Labels Form -->
              <div class="row g-3">
                <div class="col-md-12">
                  <div class="form-floating">
                    <button @click="addIngredient" type="submit" class="btn btn-primary">Novi budući otpad</button>
                  </div>
                </div>
                <div class="row" v-for="ingredient in ingredients" :key="ingredient.id">
                  <div class="col-md-8 col-sm-6 recipe-selector">
                    <div class="form-floating">
                      <ingredient-recipe-select :writtenIngredient="ingredient" />
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-3 recipe-input">
                    <div class="form-floating">
                      <input v-model="ingredient.size" type="number" step=".01" class="form-control" id="floatingName"
                        placeholder="Ime recepata">
                      <label for="floatingName">Kol</label>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-3 recipe-input">
                    <div class="form-floating">
                      <input v-model="ingredient.unit" type="text" class="form-control" id="floatingName"
                        placeholder="Ime recepata">
                      <label for="floatingName">Jed</label>
                    </div>
                  </div>
                </div>

                <div class="text-center">
                  <button @click="saveCurrentObject(currentObject)" class="btn btn-primary">Submit</button>
                  <button type="reset" class="btn btn-secondary">Reset</button>
                </div>
              </div><!-- End floating Labels Form -->

            </div>
          </div>

        </div>
      </div>
    </section>
  </main>

  <Teleport to="#search-container">
    <SearchBar></SearchBar>
  </Teleport>

  <Teleport to="#control-buttons">
    <RouterLink to="/newfridgeingredient">
      <button class="btn btn-primary" style="margin-right:20px">Novi sastojak</button>
    </RouterLink>
  </Teleport>
</template>

<style scoped>
@media (min-width: 350px) {
  .recipe-input {
    max-width: 25%;
  }
  .recipe-selector {
    max-width: 50%;
  }
}

.recipe-input{
  padding-bottom: 20px;
}
</style>
