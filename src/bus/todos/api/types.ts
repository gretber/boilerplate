// Types
import * as types from '../types';

// Fetch
export type FetchTodos = () => Promise<types.Todos>;

// Create
export type CreateTodoInput = {
    body: {
        text: string
    }
};
export type CreateTodoType = (input: CreateTodoInput) => Promise<types.Todo>;

// Update
export type UpdateTodoInput = {
    todoId: string
    body: {
        isCompleted: boolean
    }
};
export type UpdateTodo = (input: UpdateTodoInput) => Promise<types.Todo>;

// Delete
export type DeleteTodoInput = {
    todoId: string
};
export type DeleteTodo = (input: DeleteTodoInput) => Promise<Boolean>;
