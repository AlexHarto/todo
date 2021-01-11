<template>
  <ul class="items-center menu">
    <li
      v-for="route in menuRoutes"
      :key="route.name"
      class="menu-item"
      :class="{ 'menu-item-right': route.align === 'right' }"
    >
      <search v-if="route.isSearchComponent" />
      <router-link
        v-else
        :to="route.to"
        class="menu-button"
        :class="{
          'menu-button-selected': route.to.name === currentRouteName,
        }"
      >
        {{ route.name }}
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import Search from '@/components/Search.vue';
import { MenuSearchComponent, MenuRoute } from '@/interfaces/Menu';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'NavBar',
  components: { Search },
  setup() {
    const menuRoutes = computed(
      (): (MenuRoute | MenuSearchComponent)[] => useStore().state.menuRoutes,
    );
    const currentRouteName = computed(() => useRoute().name);

    return { menuRoutes, currentRouteName };
  },
});
</script>

<style scoped>
.menu {
  @apply flex gap-3 my-8 bg-white shadow-xl px-9 rounded-xl;
}
.menu-button {
  @apply inline-block py-4 text-gray-500 border-b-4 border-transparent hover:border-gray-400;
}
.menu-button-selected {
  @apply font-semibold text-gray-600 border-b-4 border-gray-600 hover:border-gray-600;
}
.menu-item {
  @apply mx-4;
}
.menu-item-right {
  @apply flex-grow text-right;
}
</style>
