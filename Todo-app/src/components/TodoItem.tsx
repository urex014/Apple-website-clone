import { Todo } from '../App';
import DeleteTodo from './DeleteTodo';

interface TodoItemProps {
  todo: Todo;
  fetchTodos: () => void;
}

export default function TodoItem({ todo, fetchTodos }: TodoItemProps) {
  const handleToggle = async () => {
    try {
      const response = await fetch(`http://localhost:5000/todos/${todo.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !todo.completed }),
      });
      if (!response.ok) throw new Error('Failed to update');
      fetchTodos();
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };
  const handleDelete = async () =>{
    try{
      await fetch(`htt://localhost:5000/todos/${todo.id}`,{
        method:'DELETE',
      });
      fetchTodos();

    } catch (error) {
      console.error("error detecting todo:", error);
    }
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
        style={{ cursor: 'pointer' }}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={handleDelete} style={{marginLeft:"10px", color:"red"}}>Delete</button>
      <DeleteTodo todoId={todo.id} fetchTodos={fetchTodos} />
    </li>
  );
}
