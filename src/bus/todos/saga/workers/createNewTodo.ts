// Saga
import { put, call } from 'redux-saga/effects';

// Types
import * as types from '../../types';

// API
import { createTodoFetcher } from '../../api';

// Actions
import { createTodoSync } from '../../actions';

// Bus
import { togglerCreatorAction } from '../../../client';

export function* createNewTodo({ payload: body }: types.CreateTodoAsyncActionType) {
    try {
        yield put(togglerCreatorAction({ type: 'isTodosFetching', value: true }));
        const result: types.Todo = yield call(createTodoFetcher, body);
        yield put(createTodoSync(result));
    } catch (error) {
        console.log(error);
    } finally {
        yield put(togglerCreatorAction({ type: 'isTodosFetching', value: false }));
    }
}
