import { ref } from 'vue';
import { Todo } from '@/interfaces/Todo';

const submitTodo = (create = false) => {
  const error = ref<undefined | string>(undefined);

  const submit = async (todo: Todo) => {
    try {
      let url = 'http://localhost:3000/todos';
      if (!create) {
        url += '/' + todo.id;
      }
      await fetch(url, {
        method: create ? 'POST' : 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
      }).then(response => response.json);
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { error, submit };
};

export default submitTodo;
