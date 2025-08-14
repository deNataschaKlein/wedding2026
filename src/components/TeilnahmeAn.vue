<script setup lang="ts">
const props = defineProps<{ modelValue: { standesamt: boolean; trauung: boolean; feier: boolean },
  isStandesamtErlaubt:boolean,
  isTrauungErlaubt: boolean }>
();
const emit = defineEmits<{ (e: "update:modelValue", value: typeof props.modelValue): void }>();

function update(key: keyof typeof props.modelValue, value: boolean) {
  emit("update:modelValue", { ...props.modelValue, [key]: value });
}
</script>

<template>
  <div class="glass-checkbox-group">
    <label class="glass-checkbox" v-if="isStandesamtErlaubt">
      <input
        type="checkbox"
        :checked="props.modelValue.standesamt"
        @change="update('standesamt', ($event.target as HTMLInputElement)?.checked)"
      />
      Standesamt
    </label>
    <label class="glass-checkbox" v-if="isTrauungErlaubt">
      <input
        type="checkbox"
        :checked="props.modelValue.trauung"
        @change="update('trauung', ($event.target as HTMLInputElement)?.checked)"
      />
      Freie Trauung
    </label>
    <label class="glass-checkbox">
      <input
        type="checkbox"
        :checked="props.modelValue.feier"
        @change="update('feier', ($event.target as HTMLInputElement)?.checked)"
      />
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
  padding: 0.5rem 1rem;
  border-radius: 32px;
  background: rgba(255,255,255,0.15);
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0,0,0,0.07);
  border: 1px solid rgba(255, 255, 255, 0.3);
  text-align: center;
}

.glass-checkbox input[type="checkbox"] {
  accent-color: #fff;
  width: 22px;
  height: 22px;
  border-radius: 8px;
  align-items: center;
  background: rgba(255,255,255,0.25);
  box-shadow: 0 2px 10px rgba(0,0,0,0.07);
}
</style>