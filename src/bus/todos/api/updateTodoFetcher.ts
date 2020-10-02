// Types
import { UpdateTodo } from './types';
//import { Todo } from '../types';

// Constants
import { API_URL } from '../../../@init/constants';

export const updateTodoFetcher: UpdateTodo = async ({ todoId, body }) => {
    const response = await fetch(`${API_URL}/todos/${todoId}`, {
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

    const data: boolean = await response.json();

    return data;
};
