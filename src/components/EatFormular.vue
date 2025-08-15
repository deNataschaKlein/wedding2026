<script setup lang="ts">
const { modelValue, index } = defineProps<{
  modelValue: string;
  index: number;
}>();
const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
function updateDiet(e: Event) {
  const value = (e.target as HTMLInputElement).value;
  emit("update:modelValue", value);
}
</script>

<template>
  <select
    class="glass-dropdown"
    :name="`diet-${index}`"
    :value="modelValue"
    @change="updateDiet"
  >
    <option value="vegetarisch">Vegetarisch</option>
    <option value="pescetarisch">Pescetarisch</option>
    <option value="mit_fleisch">Mit Fleisch</option>
    <option value="vegan">Vegan</option>
  </select>
</template>

<style scoped>
.glass-dropdown {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.15);
  font-size: 1rem;
  font-weight: 500;
  outline: none;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  margin-top: 0.5rem;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
</style>
