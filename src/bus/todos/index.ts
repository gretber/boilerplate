// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Redux
import { useTogglersRedux } from '../client/togglers';

// Hooks
import { useSelector } from '../../hooks';

// Api
import {
    getTodosAsync, createTodoAsync, updateTodoAsync, deleteTodoAsync,
} from './api';

// Actions
import {
    setTodosAction, setTodoAction, updateTodoAction, deleteTodoAction,
} from './actions';

// Types
import { loadingAction } from './types';

const useSelectorTodos = () => useSelector(({ todos }) => todos);

export const useTodosQuery = () => {
    const dispatch = useDispatch();
    const { togglersRedux, setTogglerAction } = useTogglersRedux();

    useEffect(() => {
        getTodosAsync({
            setTodos:      (todos) => void dispatch(setTodosAction(todos)),
            loadingAction: (value) => void setTogglerAction({ type: 'isTodosLoading', value }),
        });
    }, []);  // eslint-disable-line

    return {
        data:    useSelectorTodos(),
        loading: togglersRedux,
    };
};

export const useTodosMutations = () => {
    const dispatch = useDispatch();
    const { togglersRedux, setTogglerAction } = useTogglersRedux();
    const loadingAction: loadingAction = (value) => void setTogglerAction({ type: 'isTodosLoading', value });

    const createMutation = async (body: {text: string}) => void await createTodoAsync({
        body,
        setTodo: (newTodo) => void dispatch(setTodoAction(newTodo)),
        loadingAction,
    });

    const updateMutation = async (body: { isCompleted: boolean }, todoId: string) => void await updateTodoAsync({
        todoId,
        body,
        updateTodo: (newTodo) => void dispatch(updateTodoAction(newTodo)),
        loadingAction,
    });

    const deleteMutation = async (todoId: string) => void await deleteTodoAsync({
        todoId,
        deleteTodo: (newTodo) => void dispatch(deleteTodoAction(newTodo)),
        loadingAction,
    });

    return {
        createMutation,
        updateMutation,
        deleteMutation,
        loading: togglersRedux,
    };
};
