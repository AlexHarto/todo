<template>
  <div class="about">
    <router-link to="/" class="link">&lt; Back</router-link>
    <h1>This is an about page</h1>
  </div>
</template>

<style lang="postcss" scoped>
.about {
  @apply p-8 font-semibold text-gray-600;
}
.link {
  @apply pb-4 border-b-4 border-transparent hover:border-gray-600;
}
h1 {
  @apply my-8 font-extralight text-3xl;
}
</style>
