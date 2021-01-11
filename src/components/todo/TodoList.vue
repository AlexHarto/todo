<template>
  <h1>List of TODOs</h1>
  <todos-labels class="border-b" />
  <ul>
    <li v-for="(todo, i) in todos" :key="todo.id" class="todo">
      <single-todo :todo="todo" @update:todo="updateTodo(i, $event)" />
    </li>
  </ul>
</template>

<script lang="ts">
import { Todo } from '@/interfaces/Todo';
import { defineComponent } from 'vue';
import SingleTodo from '@/components/todo/SingleTodo.vue';
import TodosLabels from '@/components/todo/TodosLabels.vue';

export default defineComponent({
  name: 'TodoList',
  components: { SingleTodo, TodosLabels },
  props: {
    todos: {
      type: Array as () => Todo[],
      default: () => [],
    },
  },
  emits: ['update:todos'],
  setup(props, { emit }) {
    const updateTodo = (index: number, todo: Todo) => {
      const todosCopy = props.todos;
      todosCopy[index] = todo;
      emit('update:todos', todosCopy);
    };
    return { updateTodo };
  },
});
</script>

<style scoped>
h1 {
  @apply mb-4 mt-12 text-xl text-gray-600;
}
.todo {
  @apply flex justify-between w-full max-w-xl px-3 py-2 border-b;
}
</style>
