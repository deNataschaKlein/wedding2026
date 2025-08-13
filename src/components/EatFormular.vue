<script setup lang="ts">
import Headline from "./Headline.vue";

const props = defineProps<{
  modelValue: string;
  index: number;
}>();
const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

function updateDiet(e: Event) {
  const value = (e.target as HTMLInputElement).value;
  emit('update:modelValue', value);
}
</script>

<template>
  <div>
    <Headline h2>{{index === 0? 'ich esse': '+' + index + ' isst'}}</Headline>
    <div class="glass-form">
      <div class="radio-button-group">
        <label>
          <input type="radio" :name="`diet-${index}`" value="vegetarisch" :checked="modelValue === 'vegetarisch'" @change="updateDiet" />
          <span class="custom-radio">Vegetarisch</span>
        </label>
        <label>
          <input type="radio" :name="`diet-${index}`" value="pescetarisch" :checked="modelValue === 'pescetarisch'" @change="updateDiet" />
          <span class="custom-radio">Pescetarisch</span>
        </label>
        <label>
          <input type="radio" :name="`diet-${index}`" value="mit_fleisch" :checked="modelValue === 'mit_fleisch'" @change="updateDiet" />
          <span class="custom-radio">Mit Fleisch</span>
        </label>
        <label>
          <input type="radio" :name="`diet-${index}`" value="vegan" :checked="modelValue === 'vegan'" @change="updateDiet" />
          <span class="custom-radio">Vegan</span>
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped>

.radio-button-group {
  display: grid;
  grid-gap: 1rem;
}

.radio-button-group input[type="radio"] {
  display: none;
}

.custom-radio {
  display: block;
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.15);
  padding: 0.75rem 1rem;
  text-align: center;
  font-size: 1.1rem;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

input[type="radio"]:checked + .custom-radio {
  background: rgba(255, 136, 0, 0.5);
  color: #fff;
}

</style>