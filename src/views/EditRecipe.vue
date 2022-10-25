<script setup>
import { onMounted, ref } from "vue";
import { useRecipeStore } from "../stores/recipe"
import { useRoute } from 'vue-router'
import RecipeEditor from "../components/RecipeEditor.vue" 


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
    <recipe-editor :currentObject="currentObject" :afterSaveEvent="'edit'"></recipe-editor>
  </main>

  <Teleport to="#control-buttons">
    <RouterLink v-if="currentObject.id" :to="{name: 'editrecipe', params: {id: currentObject.id}}">
      <button class="btn btn-primary" style="margin-right:20px">Editiraj recepat</button>
    </RouterLink>
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
