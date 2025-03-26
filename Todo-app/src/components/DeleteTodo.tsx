interface DeleteTodoProps {
    todoId: number;
    fetchTodos: () => void;
  }
  
  export default function DeleteTodo({ todoId, fetchTodos }: DeleteTodoProps) {
    const handleDelete = async () => {
      try {
        const response = await fetch(`http://localhost:5000/todos/${todoId}`, {
          method: 'DELETE',
        });
        if (!response.ok) throw new Error('Failed to delete');
        fetchTodos();
      } catch (error) {
        console.error('Error deleting todo:', error);
      }
    };
  
    return (
      <button
        onClick={handleDelete}
        style={{
          marginLeft: '10px',
          padding: '5px 10px',
          backgroundColor: 'red',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '5px',
        }}
      >
        Delete
      </button>
    );
  }
  