// Saga
import { put, call } from 'redux-saga/effects';

// Types
import * as types from '../../types';

// API
import { deleteTodoFetcher } from '../../api';

// Actions
import { deleteTodoSync } from '../../actions';

// Bus
import { togglerCreatorAction } from '../../../client';

export function* deleteTodo({ payload: todoId }: types.DeleteTodoAsyncActionType) {
    try {
        yield put(togglerCreatorAction({ type: 'isTodosFetching', value: true }));
        const result: Boolean = yield call(deleteTodoFetcher, { todoId });
        if (result) {
            yield put(deleteTodoSync(todoId));
        }
    } catch (error) {
        console.log(error);
    } finally {
        yield put(togglerCreatorAction({ type: 'isTodosFetching', value: false }));
    }
}
