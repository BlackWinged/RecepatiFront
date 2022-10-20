<script setup>
import { onMounted, ref } from "vue";
import { useIngredientStore } from "../stores/ingredient"
import IngredientSelect from "../components/selects/IngredientSelect.vue"

const ingredient = useIngredientStore();
const currentObject = ref({});
ingredient.getNewIngredient()
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
        <div class="col-lg-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Novi sastojak</h5>

              <!-- Floating Labels Form -->
              <div class="row g-3">
                <div class="col-md-12">
                  <div class="form-floating">
                    <input v-model="currentObject.name" type="text" class="form-control" id="floatingName"
                      placeholder="Ime recepata">
                    <label for="floatingName">Ime sastojka</label>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-floating">
                    <ingredient-select v-model="currentObject.alternatives"/>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-floating">
                    <textarea v-model="currentObject.description" class="form-control" placeholder="Address"
                      id="floatingTextarea" style="height:100px;"></textarea>
                    <label for="floatingName">Opis</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-floating">
                    <input v-model="currentObject.price" type="number" step=".01" class="form-control" id="price"
                      placeholder="Cijena">
                    <label for="floatingEmail">Cijena</label>
                  </div>
                </div>

                <div class="text-center">
                  <button @click="ingredient.saveIngredient(currentObject)" class="btn btn-primary">Neobriši</button>
                  <button type="reset" class="btn btn-secondary">Briši</button>
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
