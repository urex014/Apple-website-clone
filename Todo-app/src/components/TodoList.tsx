import TodoItem from './TodoItem';
import { Todo } from '../App';

interface TodoListProps {
  todos: Todo[];
  fetchTodos: () => void;
}

export default function TodoList({ todos, fetchTodos }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} fetchTodos={fetchTodos} />
      ))}
    </ul>
  );
}
