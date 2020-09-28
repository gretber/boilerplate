// Types
import { GetTodos, UpdateTodo, CreateTodo, DeleteTodo } from './types';

const todosUrl = `${process.env.API_URL}/todos`;

export const getTodosAsync: GetTodos = async ({ setTodos, loadingAction }) => {
    loadingAction(true);

    try {
        const response = await fetch(todosUrl, {
            method:  'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status !== 200) {
            throw new Error('Todos fetch failed');
        }

        const data = await response.json();

        setTodos(data);
    } catch (error) {
        console.log(error);
    } finally {
        loadingAction(false);
    }
};

export const createTodoAsync: CreateTodo = async ({ body, setTodo, loadingAction }) => {
    loadingAction(true);

    try {
        const response = await fetch(todosUrl, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body:        JSON.stringify(body),
        });

        if (response.status !== 201) {
            throw new Error('Todo create failed');
        }

        const data = await response.json();

        setTodo(data);
    } catch (error) {
        console.log(error);
    } finally {
        loadingAction(false);
    }
};

export const updateTodoAsync: UpdateTodo = async ({
    todoId, body, updateTodo, loadingAction,
}) => {
    loadingAction(true);

    try {
        const response = await fetch(`${todosUrl}/${todoId}`, {
            method:  'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body:        JSON.stringify(body),
        });

        if (response.status !== 200) {
            throw new Error('Todo update failed');
        }

        const data = await response.json();

        updateTodo(data);
    } catch (error) {
        console.log(error);
    } finally {
        loadingAction(false);
    }
};

export const deleteTodoAsync: DeleteTodo = async ({
    todoId, deleteTodo, loadingAction,
}) => {
    loadingAction(true);

    try {
        const response = await fetch(`${todosUrl}/${todoId}`, {
            method:  'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });

        if (response.status !== 200) {
            throw new Error('Todo delete failed');
        }

        const data = await response.json();

        if (data) {
            deleteTodo(todoId);
        }
    } catch (error) {
        console.log(error);
    } finally {
        loadingAction(false);
    }
};
