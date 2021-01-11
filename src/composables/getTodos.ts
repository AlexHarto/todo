import { Todo } from '@/interfaces/Todo';
import { ref } from 'vue';

const getTodos = () => {
  const todos = ref<Todo[]>([]);
  const error = ref<undefined | string>(undefined);

  const load = async () => {
    try {
      const data = await fetch('http://localhost:3000/todos');
      if (!data.ok) {
        throw new Error('No data available');
      }
      todos.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { todos, error, load };
};

export default getTodos;
