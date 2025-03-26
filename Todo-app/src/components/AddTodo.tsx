import { useState } from 'react';
import './AddTodo.css';

interface AddTodoProps {
  fetchTodos: () => void;
}

export default function AddTodo({ fetchTodos }: AddTodoProps) {
  const [text, setText] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()){ return};
    await fetch('http://localhost:5000/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, completed: false }),
    });
    setText('');
    fetchTodos();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='input-field'
        type="text"
        placeholder="Add a new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
