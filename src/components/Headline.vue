<script setup lang="ts">
const props = defineProps<{
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
}>();
</script>

<template>
  <div
    class="headline"
    :class="[
      {
        'headline-h1': props.h1,
        'headline-h2': props.h2,
        'headline-h3': props.h3,
      },
    ]"
  >
    <slot />
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oranienbaum&display=swap");
.headline {
  font-family: "Oranienbaum", serif;
  font-weight: 400;
  font-style: normal;
  color: #ffffff;
}

.headline-h1 {
  font-size: 48px;
}

.headline-h2 {
  font-size: 32px;
}

.headline-h3 {
  font-size: 24px;
}
</style>
