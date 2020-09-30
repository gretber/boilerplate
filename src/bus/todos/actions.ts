// Instruments
import * as types from './types';

// ----------------------------- Fetch & Fill -----------------------------
export const todosFetchAsync: types.TodosFetchAsyncContract = () => ({
    type: types.TODOS_FETCH_ASYNC,
});

export const TodosFill: types.TodosFillContract = (payload: types.Todos) => ({
    type: types.TODOS_FILL,
    payload,
});

// ----------------------------- Create -----------------------------
export const setTodoAction: types.SetTodoContract = (payload) => ({
    type: types.SET_TODO,
    payload,
});

// ----------------------------- Update -----------------------------
export const updateTodoAction: types.UpdateTodoContract = (payload) => ({
    type: types.UPDATE_TODO,
    payload,
});

// ----------------------------- Delete -----------------------------
export const deleteTodoAction: types.DeleteTodoContract = (payload) => ({
    type: types.DELETE_TODO,
    payload,
});
