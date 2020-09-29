// Action Types
import { SET_TODOS, SET_TODO, UPDATE_TODO, DELETE_TODO, TodosActionTypes } from './types';

// Types
import { Todos } from './types';
import { Reducer } from 'redux';

const initialState: Todos = [];

export const todosReducer: Reducer<Todos, TodosActionTypes> = (state = initialState, action: TodosActionTypes) => {
    switch (action.type) {
        case SET_TODOS:
            return action.payload;

        case SET_TODO:
            return [ action.payload, ...state ];

        case UPDATE_TODO:
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return action.payload;
                }

                return todo;
            });

        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.payload);
        default:
            return state;
    }
};
