
// Instruments
import * as types from './types';

export const setTodosAction = (payload: types.Todos): types.TodosActionTypes => ({
    type: types.SET_TODOS,
    payload,
});

export const setTodoAction = (payload: types.Todo): types.TodosActionTypes => ({
    type: types.SET_TODO,
    payload,
});

export const updateTodoAction = (payload: types.Todo): types.TodosActionTypes => ({
    type: types.UPDATE_TODO,
    payload,
});

export const deleteTodoAction = (payload: string): types.TodosActionTypes => ({
    type: types.DELETE_TODO,
    payload,
});
