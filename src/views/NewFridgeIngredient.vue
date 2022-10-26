<script setup>
import { onMounted, ref, reactive, watch, computed } from "vue";
import { useFridgeStore } from "../stores/fridge"

const fridgeStore = useFridgeStore();
const currentObject = ref({});

fridgeStore.getNewFridgeIngredient().then((data) =>
  currentObject.value = data
);


function saveCurrentObject(savedObject) {
  fridgeStore.saveFridgeIngredient(savedObject)
  fridgeStore.getNewFridgeIngredient().then((data) =>
    currentObject.value = data
  );
}

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

                <div class="col-md-2 col-sm-3 recipe-input">
                  <div class="form-floating">
                    <input v-model="currentObject.size" type="text" class="form-control" id="floatingName"
                      placeholder="Ime recepata">
                    <label for="floatingName">Kol</label>
                  </div>
                </div>
                <div class="col-md-2 col-sm-3 recipe-input">
                  <div class="form-floating">
                    <input v-model="currentObject.unit" type="text" class="form-control" id="floatingName"
                      placeholder="Ime recepata">
                    <label for="floatingName">Jed</label>
                  </div>
                </div>

                <div class="text-center">
                  <button @click="saveCurrentObject(currentObject)" class="btn btn-primary">Neobriši</button>
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
