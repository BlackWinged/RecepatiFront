<script setup>
import { onMounted, reactive } from "vue";
import { useIngredientStore } from "../stores/ingredient"
import NewIngredient from "./NewIngredient.vue"

const ingredient = useIngredientStore();
const allIngredients = reactive([]);
var newIngredient = reactive({});

onMounted(() => {
  ingredient.searchIngredients(null).then((data) => {
    data.map((item) => allIngredients.push(item))
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
    <section v-if="newIngredient.id == null" class="section dashboard">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <!-- Sales Card -->
            <div v-for="ingredient in allIngredients" class="col-xxl-3 col-md-3">
              <div class="card info-card sales-card">

                <div class="card-body">
                  <h5 class="card-title">{{ingredient.name}}</h5>

                  <div class="d-flex align-items-center">
                    <div class="ps-3">
                      <h6>{{ingredient.description}}</h6>
                    </div>
                  </div>
                </div>

              </div>
            </div><!-- End Sales Card -->

          </div>
        </div>
      </div>
    </section>
  </main>

  <Teleport to="#control-buttons">
    <RouterLink to="/newingredient">
      <button class="btn btn-primary" style="margin-right:20px">Novi sastojak</button>
    </RouterLink>
  </Teleport>"
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
