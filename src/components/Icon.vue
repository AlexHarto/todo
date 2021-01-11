<template>
  <svg
    v-if="name === 'check'"
    class="icon"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M5 13l4 4L19 7"
    ></path>
  </svg>
  <svg
    v-else-if="name === 'search'"
    class="icon"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    ></path>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Icon',
  props: {
    name: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '1.5rem',
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.icon {
  width: v-bind(size);
  height: v-bind(size);
}
</style>
