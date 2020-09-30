// Core
import { ActionCreator, AnyAction } from 'redux';
import { put, call } from 'redux-saga/effects';

// Types
import { TogglersKeys } from '../bus/client';

// Action
import { togglerCreatorAction } from '../bus/client';

type OptionsType<T> = {
    fetcher: (_id?: string) => Promise<T>;
    togglerType?: TogglersKeys;
    TodosFill?: (payload: T) => {
        type: string;
        payload: T;
    };
    successSideEffect?: ActionCreator<AnyAction>;
};

export function* makeRequest<T>(options: OptionsType<T>) {
    const { fetcher, togglerType, TodosFill, successSideEffect } = options;

    try {
        if (togglerType) {
            yield put(togglerCreatorAction({ type: togglerType, value: true }));
        }

        const result = yield call(fetcher);

        if (TodosFill) {
            yield put(TodosFill(result));
        }

        if (successSideEffect) {
            yield put(successSideEffect());
        }

        return result;
    } catch (error) {
        if (error.message) {
            console.log(error.message);
        }
    } finally {
        if (togglerType) {
            yield put(togglerCreatorAction({ type: togglerType, value: false }));
        }
    }
}
