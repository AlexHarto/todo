<template>
  <div class="home">
    <todo-list v-model:todos="todos" />
    <create-todo @addTodo="addTodo" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CreateTodo from '@/components/todo/CreateTodo.vue';
import TodoList from '@/components/todo/TodoList.vue';
import getTodos from '@/composables/getTodos';
import { Todo } from '@/interfaces/Todo';

export default defineComponent({
  name: 'Home',
  components: { CreateTodo, TodoList },
  setup() {
    const { todos, error, load } = getTodos();

    load();

    const addTodo = (todo: Todo) => {
      todos.value.push(todo);
    };

    return { todos, addTodo, error };
  },
});
</script>

<style scoped>
.home {
  @apply max-w-xl mx-auto text-gray-600;
}
</style>
