<template>
  <h1>Add New TODO</h1>
  <div class="todo-wrapper">
    <input
      type="text"
      placeholder="Todo Title..."
      v-model="todo.title"
      @keyup.enter="submitTodo"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Todo } from '@/interfaces/Todo';
import updateTodo from '@/composables/updateTodo';

export default defineComponent({
  name: 'Create',
  emits: ['addTodo'],
  setup(_, { emit }) {
    const newTodo = {
      id: 0,
      title: '',
      done: false,
    };
    const todo = ref<Todo>({ ...newTodo });
    const { error, submit } = updateTodo(true);
    const submitTodo = () => {
      submit(todo.value);
      emit('addTodo', todo.value);
      todo.value = { ...newTodo };
    };
    return { todo, error, submitTodo };
  },
});
</script>

<style scoped>
h1 {
  @apply mb-4 mt-12 text-xl text-gray-600;
}
input[type='text'] {
  @apply w-full mr-3 focus:outline-none;
}
.todo-wrapper {
  @apply flex items-center justify-between w-full max-w-xl py-2 pl-3 pr-3 border rounded-lg shadow-md;
}
.checkbox {
  @apply flex items-center justify-center border border-gray-300 rounded shadow-inner cursor-pointer w-7 h-7;
  @apply hover:border-gray-600;
}
</style>
