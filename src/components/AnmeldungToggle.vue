<script setup lang="ts">
import { XMarkIcon, CheckIcon, QuestionMarkCircleIcon } from '@heroicons/vue/24/outline';
import {ref} from "vue";
const activeIndex = ref<number | null>(null);
</script>

<template>
<div class="glass-button-group">
  <div class="glass-button"  @click="activeIndex = 0" :class="{ active: activeIndex === 0 }"><XMarkIcon class="glass-button--icon"/></div>
  <div class="glass-button"  @click="activeIndex = 1" :class="{ active: activeIndex === 1 }"><QuestionMarkCircleIcon class="glass-button--icon"/></div>
  <div class="glass-button"  @click="activeIndex = 2" :class="{ active: activeIndex === 2 }"><CheckIcon class="glass-button--icon"/></div>
</div>
</template>

<style scoped>
.glass-button-group {
  display: flex;
  justify-content: space-around;
  gap: 0.5rem;
  padding: 0.5rem 0.5rem;
  border: none;
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

.glass-button{
  width: 100%;
  border-radius: 32px;
  padding: 0.5rem;

}

.glass-button:hover{
  background: rgba(255, 255, 255, 0.25);
}

.glass-button.active {
  background: rgba(255, 255, 255, 0.5);
}

.glass-button--icon{
  width: 26px;
}

body {
  background: linear-gradient(135deg, #c3ecf7, #a1c4fd);
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin: 0;
}


</style>