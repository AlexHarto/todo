interface Todo {
  id?: number;
  title: string;
  done: boolean;
}

interface Task extends Todo {
  parentId?: number;
  estimation?: number;
  estimationUnit?: string;
  completion: number;
}

export { Todo, Task };
