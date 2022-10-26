<script setup>
import { useRecipeIngredientStore } from "../stores/recipeIngredient"
import { onMounted, ref } from "vue";
import { useRecipeStore } from "../stores/recipe"
import IngredientRecipeSelect from "../components/selects/IngredientRecipeSelect.vue"
import { useRouter } from 'vue-router'


const router = useRouter();
const props = defineProps(['currentObject', 'afterSaveEvent'])

const recipes = useRecipeStore();
const recipeIngredients = useRecipeIngredientStore();

function addIngredient() {
  recipeIngredients.getNewRecipeIngredient().then((data) => {
    props.currentObject.ingredients.push(data);
  })
}

function saveCurrentObject(currentObject) {
  recipes.saveRecipe(currentObject)
  if (props.afterSaveEvent == "new")
    recipes.getNewRecipe()
      .then((data) => currentObject.value = data);
  if (props.afterSaveEvent == "edit") {
    router.push({ name: 'recipe', params: { id: currentObject.id } })
  }
}

</script>

<template>
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
                  <input v-model="currentObject.url" type="text" class="form-control" id="floatingName"
                    placeholder="Ime recepata">
                  <label for="floatingName">Link na recepat</label>
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-floating">
                  <button @click="addIngredient" type="submit" class="btn btn-primary">Novi sastojak</button>
                </div>
              </div>
              <div class="row" v-for="ingredient in currentObject.ingredients">
                <div class="col-md-8 col-sm-6 recipe-selector">
                  <div class="form-floating">
                    <ingredient-recipe-select :writtenIngredient="ingredient" />
                  </div>
                </div>
                <div class="col-md-2 col-sm-3 recipe-input">
                  <div class="form-floating">
                    <input v-model="ingredient.size" type="text" class="form-control" id="floatingName"
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
              <div class="col-12">
                <div class="form-floating">
                  <textarea v-model="currentObject.description" class="form-control" placeholder="Description"
                    id="floatingTextarea" style="height: 100px;"></textarea>
                  <label for="floatingTextarea">Opis</label>
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