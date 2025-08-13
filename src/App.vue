<script setup lang="ts">
import Headline from "./components/Headline.vue";
import AnmeldungToggle from "./components/AnmeldungToggle.vue";
import EatFormular from "./components/EatFormular.vue";
import NumberOfPeople from "./components/NumberOfPeople.vue";
import {ref, watch} from "vue";

const activeIndex = ref<number | null>(null);
const erwachsene = ref<number>(1);
const kinder = ref<number>(0);
const mehrzahl = ref<boolean>(true);

const diets = ref<string[]>([]);
function updateDiet(index: number, value: string) {
  diets.value[index] = value;
}

watch([erwachsene, kinder], () => {
  const total = erwachsene.value + kinder.value;
  // Array auf die richtige Länge bringen
  while (diets.value.length < total) diets.value.push("");
  while (diets.value.length > total) diets.value.pop();
});


</script>

<template>
  <div class="frame-container">
      <Headline h1>Save the Date</Headline>
      Hier wird ein Datum stehen
      <form>
        <AnmeldungToggle v-model="activeIndex"/>
        <div class="number-of-people--container" v-if="activeIndex === 2 && mehrzahl">
          <NumberOfPeople label="Erwachsene" v-model="erwachsene"/>
          <NumberOfPeople label="Kinder" v-model="kinder"/>
        </div>
        <EatFormular v-if="activeIndex === 2" v-for="(_person, index) in erwachsene + kinder"
                     :key="index"
                     :modelValue="diets[index]"
                     :index="index"
                     @update:modelValue="updateDiet(index, $event)"/>
      </form>

  </div>
</template>

<style scoped>
.frame-container {
  position: relative;
  height: 85%;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  max-width: 600px;
}

@media (min-width: 700px) {
  .frame-container {
    padding: 2rem 4rem;
  }
}

.number-of-people--container{
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
}
</style>
