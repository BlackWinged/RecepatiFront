<script setup>
import { ref, reactive, watch } from 'vue'
import { useIngredientStore } from "../../stores/ingredient"
import vSelect from 'vue-select'

var ingredients = reactive([])
const ingredient = useIngredientStore();
const alternatives = ref([]);
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])


function searchIngredients(search, loading){
  ingredient.searchIngredients(search).then((data) => {
    ingredients.splice(0, ingredients.length)
    data.map((item) => ingredients.push(item));
  })

}

watch(alternatives, function(alternatives) {
  emit('update:modelValue', alternatives)
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
  multiple 
  :options="ingredients" 
  :get-option-label="getOptionLabel" 
  :value="modelValue"  
  v-model="alternatives"/>
</template>

