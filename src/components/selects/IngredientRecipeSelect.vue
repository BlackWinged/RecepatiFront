<script setup>
import { ref, reactive, watch, onMounted } from 'vue'
import { useIngredientStore } from "../../stores/ingredient"
import vSelect from 'vue-select'

var ingredients = reactive([])
const ingredient = useIngredientStore();
const selectedIngredient = ref({id: null, name: null});
const props = defineProps(['writtenIngredient'])

onMounted(() => {
  selectedIngredient.value.name = props.writtenIngredient.name
})

function searchIngredients(search, loading){
  ingredient.searchIngredients(search).then((data) => {
    ingredients.splice(0, ingredients.length)
    data.map((item) => ingredients.push(item));
  })

}


watch(selectedIngredient, function(selectedIngredient) {
  props.writtenIngredient.name = selectedIngredient.name;
  props.writtenIngredient.ingredientId = selectedIngredient.id;
})



var getOptionLabel = (option) => {
                    if (typeof option === 'object') {
                        if (!option.hasOwnProperty("name")) {
                            return console.warn(
                                `[vue-select warn]: Label key "option.name" does not` +
                                ` exist in options object ${JSON.stringify(option)}.\n` +
                                'https://vue-select.org/api/props.html#getoptionlabel'
                            )
                        }
                        return option.name;
                    }
                    return option;
                }


</script>

<template>
  <v-select @search="(search, loading) => searchIngredients(search, loading)"  
  :options="ingredients" 
  :get-option-label="getOptionLabel" 
  v-model="selectedIngredient"/>
</template>

<style scoped>
@media (max-width: 600px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>