<template>
  <div class="px-4 min-w-min">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TodoLayout',
  components: { NavBar },
});
</script>
