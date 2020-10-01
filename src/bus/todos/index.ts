// Core
import { useEffect } from 'react';
import { useSelector } from '../../hooks';
import { useDispatch } from 'react-redux';

// Api
//import { createTodoFetcher, updateTodo, deleteTodoFetcher } from './api';

// Toglers
import { useTogglersRedux } from '../client';

// Types
import { TODOS_FETCH_ASYNC } from './types';

export const useTodosQuery = () => {
    const data = useSelector(({ todos }) => todos);
    const { togglersRedux: { isTodosFetching }} = useTogglersRedux();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: TODOS_FETCH_ASYNC });
    }, []);

    return {
        data,
        loading: isTodosFetching,
    };
};

// export const useTodosMutations = () => {
//     const { togglersRedux: { isTodosFetching }} = useTogglersRedux();

//     return {
//         createTodoFetcher,
//         updateTodo,
//         deleteTodoFetcher,
//         loading: isTodosFetching,
//     };
// };
