<script setup>
import { onMounted, ref } from "vue";
import { useRecipeStore } from "../stores/recipe"
import IngredientRecipeSelect from "../components/selects/IngredientRecipeSelect.vue"
import { useRoute } from 'vue-router'

const route = useRoute();
const recipes = useRecipeStore();
const currentObject = ref({});


recipes.getRecipe(route.params.id)
  .then((data) => currentObject.value = data);

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
              <h5 class="card-title">Novi recepat</h5>

              <!-- Floating Labels Form -->
              <div class="row g-3">
                <div class="col-md-12">
                  <div class="form-floating">
                    <input v-model="currentObject.name" type="text" class="form-control" id="floatingName"
                      placeholder="Ime recepata">
                    <label for="floatingName">Ime recepta</label>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-floating">
                    <button @click="addIngredient" type="submit" class="btn btn-primary">Novi sastojak</button>
                  </div>
                </div>
                <div class="row" v-for="ingredient in currentObject.ingredients">
                  <div class="col-md-8">
                    <div class="form-floating">
                      <ingredient-recipe-select :writtenIngredient="ingredient" />
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="form-floating">
                      <input v-model="ingredient.size" type="text" class="form-control" id="floatingName"
                        placeholder="Ime recepata">
                      <label for="floatingName">Kol</label>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="form-floating">
                      <input v-model="ingredient.unit" type="text" class="form-control" id="floatingName"
                        placeholder="Ime recepata">
                      <label for="floatingName">Jed</label>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating">
                    <textarea v-model="currentObject.description" class="form-control" placeholder="Description"
                      id="floatingTextarea" style="height: 100px;"></textarea>
                    <label for="floatingTextarea">Opis</label>
                  </div>
                </div>

                <div class="text-center">
                  <button @click="recipes.saveRecipe(currentObject)" class="btn btn-primary">Submit</button>
                  <button type="reset" class="btn btn-secondary">Reset</button>
                </div>
              </div><!-- End floating Labels Form -->

            </div>
          </div>

        </div>
      </div>
    </section>
  </main>
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
