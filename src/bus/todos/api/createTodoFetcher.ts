// Types
import { CreateTodoType } from './types';
import { Todo } from '../types';

// Constants
import { API_URL } from '../../../@init/constants';

export const createTodoFetcher: CreateTodoType = async ({ body }) => {
    const response = await fetch(`${API_URL}/todos`, {
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

    const data: Todo = await response.json();

    return data;
};
