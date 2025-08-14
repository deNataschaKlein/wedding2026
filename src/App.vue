<script setup lang="ts">
import Headline from "./components/Headline.vue";
import AnmeldungToggle from "./components/AnmeldungToggle.vue";
import EatFormular from "./components/EatFormular.vue";
import NumberOfPeople from "./components/NumberOfPeople.vue";
import TeilnahmeAn from "./components/TeilnahmeAn.vue";
import {computed, onMounted, ref, watch} from "vue";

const formCompleted = ref(false);

const activeIndex = ref<number | null>(null);
const erwachsene = ref<number>(1);
const kinder = ref<number>(0);
const totalPeople = computed(() =>erwachsene.value + kinder.value);

const isMehrzahlErlaubt = ref<boolean>(true);
const isStandesamtErlaubt = ref<boolean>(false);
const isTrauungErlaubt = ref<boolean>(true);

const diets = ref<string[]>([]);
const teilnahmen = ref({
  standesamt: false,
  trauung: false,
  feier: false
});

function updateDiet(index: number, value: string) {
  diets.value[index] = value;
}

function handleSubmit() {
  localStorage.setItem("formCompleted", "true");
  formCompleted.value = true;
}

watch([erwachsene, kinder], () => {
  const total = erwachsene.value + kinder.value;
  while (diets.value.length < total) diets.value.push("");
  while (diets.value.length > total) diets.value.pop();
});

onMounted(() => {
  formCompleted.value = localStorage.getItem("formCompleted") === "true";
});
</script>

<template>
  <div class="frame-container">
    <Headline h1>Save the Date</Headline>
    <Headline h3>03.07.2026</Headline>
    <form class="glass-form">
      <AnmeldungToggle v-model="activeIndex" />
      <div
        v-if="activeIndex === 2 && isMehrzahlErlaubt"
        class="number-of-people--container"
      >
        <NumberOfPeople label="Erwachsene" v-model="erwachsene" />
        <NumberOfPeople label="Kinder" v-model="kinder" />
      </div>
      <TeilnahmeAn
        v-if="activeIndex === 2"
        v-model="teilnahmen"
        :isTrauungErlaubt="isTrauungErlaubt"
        :isStandesamtErlaubt="isStandesamtErlaubt"
      />
      <EatFormular
        v-if="activeIndex === 2"
        v-for="index in totalPeople"
        :key="index"
        :modelValue="diets[index]"
        :index="index"
        @update:modelValue="updateDiet(index, $event)"
      />
      <textarea
        class="glass-textarea"
        name="nachricht"
        rows="2"
        placeholder="Nachricht oder Kommentar..."
      />
      <button
        type="submit"
        @click="handleSubmit"
        class="glass-button absenden-btn"
      >
        Absenden
      </button>
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

.glass-form {
  display: grid;
  grid-gap: 16px;
}

.glass-textarea {
  display: block;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.15);
  font-size: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);
  width: 100%;
  max-width: 570px;
}

.number-of-people--container {
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
}

.absenden-btn {
  width: 100%;
  border-radius: 32px;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.15);
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  margin-top: 1.5rem;
  transition: background 0.3s;
}

.absenden-btn:hover {
  background: rgba(255, 255, 255, 0.25);
}
</style>