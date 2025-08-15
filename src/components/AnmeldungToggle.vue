<script setup lang="ts">
import {
  XMarkIcon,
  CheckIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/vue/24/outline";

const props = defineProps<{ modelValue: number | null }>();
const emit = defineEmits<{
  (e: "update:modelValue", value: number | null): void;
}>();

const options = [
  { value: 0, icon: XMarkIcon },
  { value: 1, icon: QuestionMarkCircleIcon },
  { value: 2, icon: CheckIcon },
];
</script>

<template>
  <div class="glass-style glass-button-group">
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
        style="display: none"
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
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  max-width: 600px;
  width: inherit;
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
  background: rgba(255, 255, 255, 0.5);
}

.glass-button--icon {
  width: 26px;
}

@media (prefers-color-scheme: dark) {
  .glass-button:hover {
    background: rgba(17, 25, 40, 0.125);
  }

  .active {
    background: rgba(17, 25, 40, 0.25);
  }
}
</style>
