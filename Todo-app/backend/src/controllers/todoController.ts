import { Request, Response } from 'express';
import pool from '../models/db';

// Get all todos
export const getTodos = async (req: Request, res: Response) => {
  const result = await pool.query('SELECT * FROM todos ORDER BY id DESC');
  res.json(result.rows);
};

// Add a new todo
export const addTodo = async (req: Request, res: Response) => {
  const { text, completed } = req.body;
  const result = await pool.query(
    'INSERT INTO todos (text, completed) VALUES ($1, $2) RETURNING *',
    [text, completed]
  );
  res.status(201).json(result.rows[0]);
};

// Update a todo
export const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { completed } = req.body;
  const result = await pool.query(
    'UPDATE todos SET completed = $1 WHERE id = $2 RETURNING *',
    [completed, id]
  );
  res.json(result.rows[0]);
};

// Delete a todo
export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  await pool.query('DELETE FROM todos WHERE id = $1', [id]);
  res.status(204).send();
};
