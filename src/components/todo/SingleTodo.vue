<template>
  <div class="w-full mr-3">{{ todo.title }}</div>
  <div class="checkbox" @click="toggleDone">
    <icon name="check" v-if="todo.done" />
  </div>
</template>

<script lang="ts">
import { Todo } from '@/interfaces/Todo';
import { defineComponent } from 'vue';
import Icon from '@/components/Icon.vue';
import updateTodo from '@/composables/updateTodo';

export default defineComponent({
  name: 'SingleTodo',
  components: { Icon },
  props: {
    todo: {
      type: Object as () => Todo,
      default: {},
    },
  },
  emits: ['update:todo'],

  setup(props, { emit }) {
    const { error, submit } = updateTodo();
    const toggleDone = () => {
      const updatedTodo: Todo = {
        ...props.todo,
        done: !props.todo.done,
      };
      submit(updatedTodo);
      emit('update:todo', updatedTodo);
    };

    return { error, toggleDone };
  },
});
</script>

<style scoped>
.checkbox {
  @apply flex items-center justify-center border border-gray-300 rounded shadow-inner cursor-pointer w-7 h-7;
  @apply hover:border-gray-600;
}
</style>
