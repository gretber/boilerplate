// Helpers
import { makeRequest } from '../../../../helpers/makeRequest';

// Types
import { Todos } from '../../types';

// API
import { todosFetcher } from '../../api/todosFetcher';

// Actions
import * as types from '../../types';
import { put, call } from 'redux-saga/effects';

// Bus
import { togglerCreatorAction } from '../../../client';

export function* fetchTodos() {
    try {
        yield put(togglerCreatorAction({ type: 'isTodosFetching', value: true }));
        const result: Todos | undefined = yield call(todosFetcher);
        yield put({ type: types.TODOS_FILL, payload: result });
        yield put(togglerCreatorAction({ type: 'isTodosFetching', value: false }));
    } catch (error) {
        console.log(error);
    }
}
