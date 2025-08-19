<script setup lang="ts">
import Headline from "./Headline.vue";

const props = defineProps<{
  modelValue: { standesamt: boolean; trauung: boolean; feier: boolean };
  isStandesamtErlaubt: boolean;
  isTrauungErlaubt: boolean;
}>();
const emit = defineEmits<{
  (e: "update:modelValue", value: typeof props.modelValue): void;
}>();

function update(key: keyof typeof props.modelValue) {
  emit("update:modelValue", {
    ...props.modelValue,
    [key]: !props.modelValue[key],
  });
}
</script>

<template>
  <Headline h3>Teilnahme an:</Headline>
  <div class="glass-checkbox-group">
    <label
      class="glass-style glass-checkbox"
      :class="{ active: props.modelValue.standesamt }"
      v-if="isStandesamtErlaubt"
      @change="update('standesamt')"
    >
      <input type="checkbox" style="display: none" />
      Standesamt
    </label>
    <label
      class="glass-style glass-checkbox"
      :class="{ active: props.modelValue.trauung }"
      v-if="isTrauungErlaubt || isStandesamtErlaubt"
      @change="update('trauung')"
    >
      <input type="checkbox" style="display: none" />
      Freie Trauung
    </label>
    <label
      class="glass-style glass-checkbox"
      :class="{ active: props.modelValue.feier }"
      @change="update('feier')"
    >
      <input type="checkbox" style="display: none" />
      Feier
    </label>
  </div>
</template>

<style scoped>
.glass-checkbox-group {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.glass-checkbox {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  text-align: center;
  width: max-content;
  transition: background 0.3s;
}

.glass-checkbox.active {
  background: rgba(17, 25, 40, 0.25);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
}
</style>
