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
    class="glass-style glass-dropdown"
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
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
</style>
