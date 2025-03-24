import { Todo } from '../App';

interface TodoItemProps {
  todo: Todo;
  fetchTodos: () => void;
}

export default function TodoItem({ todo, fetchTodos }: TodoItemProps) {
  const handleDelete = async () => {
    await fetch(`http://localhost:5000/todos/${todo.id}`, {
      method: 'DELETE',
    });
    fetchTodos();
  };

  const handleToggle = async () => {
    await fetch(`http://localhost:5000/todos/${todo.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !todo.completed }),
    });
    fetchTodos();
  };

  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      {todo.text}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}
