<template>
  <div class="labels-group">
    <label>Title</label>
    <label>Done</label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TodosLabels',
});
</script>

<style scoped>
label {
  @apply font-semibold text-gray-400 uppercase;
}
.labels-group {
  @apply flex justify-between w-full max-w-xl px-3 py-2;
}
</style>
