<script setup lang="ts">
import Headline from "./components/Headline.vue";
import AnmeldungToggle from "./components/AnmeldungToggle.vue";
import EatFormular from "./components/EatFormular.vue";
import NumberOfPeople from "./components/NumberOfPeople.vue";
import TeilnahmeAn from "./components/TeilnahmeAn.vue";
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

const RechteEnum = {
  FEIERN_EINZAHL: "93585bd0-3b70-44f8-b0b8-509cfa8e3325",
  FREIE_TRAUUNG_MEHRZAHL: "98ab33fc-5c5a-493f-88e9-8156eb719b53",
  KANN_ALLES_MEHRZAHL: "03c2937c-0029-4671-ac18-ed47f68cf15f",
};

const route = useRoute();
const uuid = computed(() => route.params.uuid);
const formCompleted = ref(false);

const activeIndex = ref<number | null>(null);
const erwachsene = ref<number>(1);
const kinder = ref<number>(0);
const totalPeople = computed(() => erwachsene.value + kinder.value);

const isMehrzahlErlaubt = computed(
  () =>
    uuid.value !== RechteEnum.FEIERN_EINZAHL &&
    (uuid.value === RechteEnum.FREIE_TRAUUNG_MEHRZAHL ||
      uuid.value === RechteEnum.KANN_ALLES_MEHRZAHL),
);

const correctUuid = computed(() => {
  return (
    uuid.value === RechteEnum.FREIE_TRAUUNG_MEHRZAHL ||
    uuid.value === RechteEnum.KANN_ALLES_MEHRZAHL ||
    uuid.value === RechteEnum.FEIERN_EINZAHL
  );
});

const isStandesamtErlaubt = computed(
  () => RechteEnum.KANN_ALLES_MEHRZAHL === uuid.value,
);

const isTrauungErlaubt = computed(
  () => RechteEnum.FREIE_TRAUUNG_MEHRZAHL === uuid.value,
);

const diets = ref<string[]>([]);
const teilnahmen = ref({
  standesamt: false,
  trauung: false,
  feier: false,
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
  <div class="frame-container" v-if="correctUuid">
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
        v-if="activeIndex === 2 && (isTrauungErlaubt || isStandesamtErlaubt)"
        v-model="teilnahmen"
        :isTrauungErlaubt="isTrauungErlaubt"
        :isStandesamtErlaubt="isStandesamtErlaubt"
      />
      <div
        v-if="activeIndex === 2 && !(isTrauungErlaubt || isStandesamtErlaubt)"
      >
        Wir laden dich um 20 Uhr zu unserer Feier nach der Trauung ein
      </div>
      <Headline h3 v-if="activeIndex === 2 && isTrauungErlaubt"
        >Essen:
      </Headline>
      <EatFormular
        v-if="activeIndex === 2 && isTrauungErlaubt"
        v-for="index in totalPeople"
        :key="index"
        :modelValue="diets[index]"
        :index="index"
        @update:modelValue="updateDiet(index, $event)"
      />

      <textarea
        class="glass-style glass-textarea"
        name="nachricht"
        rows="3"
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
  background-color: rgba(108, 110, 95, 0.75);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border-radius: 16px;
}

@media (min-width: 375px) {
  .frame-container {
    display: block;
    position: initial;
    border-radius: 0;
    padding: 1rem;
  }
}

@media (min-width: 700px) {
  .frame-container {
    padding: 2rem 4rem;
  }
}

.glass-form {
  display: grid;
  grid-gap: 16px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

.glass-textarea {
  display: block;
  align-items: center;
  font-size: 1rem;
  cursor: pointer;
  color: #fff;
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
  background: rgba(255, 255, 255);
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  margin-top: 1.5rem;
  transition: background 0.3s;
}

.absenden-btn:hover {
  background: rgb(122, 122, 116);
}

@media (prefers-color-scheme: light) {
  .frame-container {
    background-color: rgba(185, 189, 162, 0.75);
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    border-radius: 16px;
  }
}
</style>
