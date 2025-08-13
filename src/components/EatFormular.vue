<script setup lang="ts">
import Headline from './Headline.vue';
</script>

<template>
  <div>
    <Headline h2> Ich esse</Headline>
    <div class="glass-form">
      <div class="radio-button-group">
        <label>
          <input type="radio" name="diet" value="vegetarisch" />
          <span class="custom-radio">Vegetarisch</span>
        </label>
        <label>
          <input type="radio" name="diet" value="pescetarisch" />
          <span class="custom-radio">Pescetarisch</span>
        </label>
        <label>
          <input type="radio" name="diet" value="mit_fleisch" />
          <span class="custom-radio">Mit Fleisch</span>
        </label>
        <label>
          <input type="radio" name="diet" value="vegan" />
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