// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import * as types from '../types';

// Workers
import {
    fetchTodos,
    createNewTodo,
    deleteTodo,
    updateTodo,
} from './workers';

function* watchFetchTodos(): SagaIterator {
    yield takeEvery(types.TODOS_FETCH_ASYNC, fetchTodos);
}

function* watchCreateNewTodo(): SagaIterator {
    yield takeEvery(types.CREATE_TODO_ASYNC, createNewTodo);
}

function* watchDeleteTodo(): SagaIterator {
    yield takeEvery(types.DELETE_TODO_ASYNC, deleteTodo);
}

function* watchUpdateTodo(): SagaIterator {
    yield takeEvery(types.UPDATE_TODO_ASYNC, updateTodo);
}

export function* watchTodos(): SagaIterator {
    yield all([
        call(watchFetchTodos),
        call(watchCreateNewTodo),
        call(watchDeleteTodo),
        call(watchUpdateTodo),
    ]);
}