// Instruments
import * as types from './types';

// ----------------------------- Fetch & Fill -----------------------------
export const todosFetchAsync: types.TodosFetchAsyncContract = () => ({
    type: types.TODOS_FETCH_ASYNC,
});

export const todosFill: types.TodosFillContract = (payload: types.Todos) => ({
    type: types.TODOS_FILL,
    payload,
});

// ----------------------------- Create -----------------------------
export const createTodoAsync: types.CreateTodoAsyncContract = (payload) => ({
    type: types.CREATE_TODO_ASYNC,
    payload,
});


export const createTodoSync: types.CreateTodoSyncContract = (payload) => ({
    type: types.CREATE_TODO_SYNC,
    payload,
});

// ----------------------------- Update -----------------------------
export const updateTodoAsync: types.UpdateTodoAsyncContract = (payload) => ({
    type: types.UPDATE_TODO_ASYNC,
    payload,
});

export const updateTodoSync: types.UpdateTodoSyncContract = (payload) => ({
    type: types.UPDATE_TODO_SYNC,
    payload,
});

// ----------------------------- Delete -----------------------------
export const deleteTodoAsync: types.DeleteTodoAsyncContract = (payload) => ({
    type: types.DELETE_TODO_ASYNC,
    payload,
});

export const deleteTodoSync: types.DeleteTodoSyncContract = (payload) => ({
    type: types.DELETE_TODO_SYNC,
    payload,
});
