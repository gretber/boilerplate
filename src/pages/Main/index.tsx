// Core
import React, { FC, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

// Components
import { ErrorBoundary, Todo } from '../../components';

// Api
import { useTodosQuery } from '../../bus/todos';

// Redux
import { useTogglersRedux } from '../../bus/client/togglers';

// Elements
import { Button, Spinner } from '../../elements';

// Styles
import { Container, Header } from './styles';

// Actions
import { createTodoAsync, deleteTodoAsync, updateTodoAsync } from '../../bus/todos/actions';

const Main: FC = () => {
    const [ text, setText ] = useState<string>('');
    const headerRef = useRef<HTMLElement>(null);
    const { togglersRedux: { isOnline }} = useTogglersRedux();
    const { data, loading } = useTodosQuery();
    //const { updateTodo } = useTodosMutations();
    const dispatch = useDispatch();

    if (data.length === 0 || loading) {
        return <Spinner />;
    }

    const onCreate = () => {
        if (text !== '') {
            dispatch(createTodoAsync({ body: { text }}));
            setText('');
        }
    };

    return (
        <Container>
            {false && <Spinner absolute />}
            <Header ref = { headerRef }>
                <nav />
                <input
                    value = { text }
                    onChange = { (event) => void setText(event.target.value) }
                />
                <nav>
                    <Button
                        disabled = { !isOnline }
                        title = 'Create TODO'
                        onClick = { onCreate }>
                        CREATE
                    </Button>
                </nav>
            </Header>
            <main>
                {
                    data.map((todo, index) => (
                        <Todo
                            isColor = { Boolean(index % 2) }
                            key = { todo.id }
                            { ...todo }
                            deleteHandler = { () => void dispatch(deleteTodoAsync(todo.id)) }
                            updateHandler = { () => void dispatch(updateTodoAsync({
                                todoId: todo.id,
                                body:   { isCompleted: !todo.isCompleted },
                            })) }
                        />
                    ))
                }
            </main>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
