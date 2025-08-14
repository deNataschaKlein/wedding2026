<script setup lang="ts">
import { PlusIcon, MinusIcon} from "@heroicons/vue/24/outline";
import {ref} from "vue";

const props = defineProps<{
  label: string;
  modelValue: number;
}>();

const internalValue = ref(props.modelValue);

function updateValue(val: number) {
  internalValue.value = val;
  emit('update:modelValue', val);
}


const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
}>();
</script>

<template>
  <div class="number-of-people">
    {{label}}
    <div class="glass-counter-group">
      <button type="button" class="number-of-people--counter" @click="internalValue > 0 && updateValue(internalValue - 1)"><MinusIcon/></button>
      {{props.modelValue}}
      <button type="button" class="number-of-people--counter" @click="updateValue(internalValue+1)"><PlusIcon/></button>

    </div>
  </div>
</template>

<style scoped>
.number-of-people {
  display: grid;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}
.glass-counter-group{
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.5rem 0.5rem;
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.15);
  font-size: 1rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: max-content;
}

.number-of-people--counter {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  width: 30px;
}
</style>