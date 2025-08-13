<script setup lang="ts">
import { XMarkIcon, CheckIcon, QuestionMarkCircleIcon } from '@heroicons/vue/24/outline';

const props = defineProps<{ modelValue: number | null }>();
const emit = defineEmits<{
  (e: "update:modelValue", value: number | null): void;
}>();

const options = [
  { value: 0, icon: XMarkIcon },
  { value: 1, icon: QuestionMarkCircleIcon },
  { value: 2, icon: CheckIcon }
];
</script>

<template>
  <div class="glass-button-group">
    <label
      v-for="option in options"
      :key="option.value"
      class="glass-button"
      :class="{ active: props.modelValue === option.value }"
    >
      <input
        type="radio"
        name="anmeldung"
        :value="option.value"
        :checked="props.modelValue === option.value"
        @change="emit('update:modelValue', option.value)"
        style="display: none;"

      />
      <component :is="option.icon" class="glass-button--icon" />
    </label>
  </div>
</template>

<style scoped>
.glass-button-group {
  display: flex;
  justify-content: space-around;
  gap: 0.5rem;
  padding: 0.5rem 0.5rem;
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  font-size: 1rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.glass-button {
  width: 100%;
  border-radius: 32px;
  padding: 0.5rem;
  cursor: pointer;
}

.glass-button:hover {
  background: rgba(255, 255, 255, 0.25);
}

.active {
  background: rgba(255, 136, 0, 0.5);
}

.glass-button--icon {
  width: 26px;
}
</style>