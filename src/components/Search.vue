<template>
  <div class="search">
    <input type="text" placeholder="Search..." />
    <div class="icon">
      <icon name="search" size="1rem" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Icon from '@/components/Icon.vue';

export default defineComponent({
  name: 'Search',
  components: { Icon },
  setup() {
    return {};
  },
});
</script>

<style scoped>
input[type='text'] {
  @apply px-4 py-2 border outline-none rounded-xl;
  @apply hover:border-gray-400;
}
.search {
  @apply relative mb-1 text-gray-600;
}
.icon {
  @apply absolute text-gray-400 cursor-pointer hover:text-gray-600 right-2 top-1/3;
}
</style>
