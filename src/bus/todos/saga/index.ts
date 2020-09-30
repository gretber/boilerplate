// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import * as types from '../types';

// Workers
import {
    fetchTodos,
} from './workers';

function* watchFetchTodos(): SagaIterator {
    yield takeEvery(types.TODOS_FETCH_ASYNC, fetchTodos);
}

export function* watchTodos(): SagaIterator {
    yield all([ call(watchFetchTodos) ]);
}
