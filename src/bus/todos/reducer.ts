import { Reducer } from 'redux';

// Types
import * as types from './types';

const initialState: types.Todos = [];

export const todosReducer: Reducer<types.Todos, types.TodosActionTypes> = (state = initialState, action) => {
    switch (action.type) {
        case types.TODOS_FETCH_ASYNC:
            return state;

        case types.TODOS_FILL:
            return action.payload;

        case types.SET_TODO:
            return [ action.payload, ...state ];

        case types.UPDATE_TODO:
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return action.payload;
                }

                return todo;
            });

        case types.DELETE_TODO:
            return state.filter((todo) => todo.id !== action.payload);

        default:
            return state;
    }
};
