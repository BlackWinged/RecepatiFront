<script setup>
import { onMounted, ref } from "vue";
import { useFridgeStore } from "../stores/fridge"
import IngredientRecipeSelect from "../components/selects/IngredientRecipeSelect.vue"

const fridgeStore = useFridgeStore();
const currentObject = ref({});


fridgeStore.getFridgeForCurrentUser()
  .then((data) => currentObject.value = data);


function addIngredient(){
  fridgeStore.getNewFridgeIngredient().then((data) => 
    currentObject.value.contents.push(data)
  );
}

function saveCurrentObject(savedObject){
  fridgeStore.saveFridge(savedObject)
}
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
                <div class="row" v-for="ingredient in currentObject.contents">
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

</template>

<style>

</style>
