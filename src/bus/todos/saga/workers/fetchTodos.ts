// Saga
import { put, call } from 'redux-saga/effects';

// Types
import * as types from '../../types';

// API
import { todosFetcher } from '../../api';

// Actions
import { todosFill } from '../../actions';

// Bus
import { togglerCreatorAction } from '../../../client';

export function* fetchTodos() {
    try {
        yield put(togglerCreatorAction({ type: 'isTodosFetching', value: true }));
        const result: types.Todos = yield call(todosFetcher);
        yield put(todosFill(result));
    } catch (error) {
        console.log(error);
    } finally {
        yield put(togglerCreatorAction({ type: 'isTodosFetching', value: false }));
    }
}