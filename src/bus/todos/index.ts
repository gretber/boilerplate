// Core
import { useEffect } from 'react';
import { useSelector } from '../../hooks';
import { useDispatch } from 'react-redux';

// Api
import { todosFetcher, createTodo, updateTodo, deleteTodo } from './api';

// Toglers
import { useTogglersRedux } from '../client';

export const useTodosQuery = () => {
    const data = useSelector(({ todos }) => todos);
    const { togglersRedux: { isTodosFetching }} = useTogglersRedux();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'TODOS_FETCH_ASYNC' });
    }, []);

    return {
        data,
        loading: isTodosFetching,
    };
};

export const useTodosMutations = () => {
    const { togglersRedux: { isTodosFetching }} = useTogglersRedux();

    return {
        createTodo,
        updateTodo,
        deleteTodo,
        loading: isTodosFetching,
    };
};
