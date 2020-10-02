// Saga
import { put, call } from 'redux-saga/effects';

// Types
import * as types from '../../types';

// API
import { updateTodoFetcher } from '../../api';

// Actions
import { updateTodoSync } from '../../actions';

// Bus
import { togglerCreatorAction } from '../../../client';

export function* updateTodo({ payload: { todoId, body }}: types.UpdateTodoAsyncActionType) {
    try {
        yield put(togglerCreatorAction({ type: 'isTodosFetching', value: true }));
        const result: string = yield call(updateTodoFetcher, { todoId, body });
        if (result) {
            yield put(updateTodoSync({ todoId, body }));
        }
    } catch (error) {
        console.log(error);
    } finally {
        yield put(togglerCreatorAction({ type: 'isTodosFetching', value: false }));
    }
}
