// Core
import React, { FC, useRef, useState } from 'react';

// Components
import { ErrorBoundary, Todo } from '../../components';

// Api
import { useTodosQuery, useCreateTodo, useUpdateTodo, useDeleteTodo } from '../../bus/todos';

// Redux
import { useTogglersRedux } from '../../bus/client/togglers';

// Elements
import { Button, Spinner } from '../../elements';

// Styles
import { Container, Header } from './styles';

const Main: FC = () => {
    const [ text, setText ] = useState('');
    const headerRef = useRef<HTMLElement>(null);
    const { togglersRedux: { isOnline }} = useTogglersRedux();

    const { data, isLoading: isTodosLoading } = useTodosQuery();
    const [ createTodo, { isLoading: isCreateTodoLoading }] = useCreateTodo();
    const [ updateTodo, { isLoading: isUpdateTodoLoading }] = useUpdateTodo();
    const [ deleteTodo, { isLoading: isDeleteTodoLoading }] = useDeleteTodo();

    const isLoading = isTodosLoading
        || isCreateTodoLoading
        || isUpdateTodoLoading
        || isDeleteTodoLoading;

    if (!data || isLoading) {
        return <Spinner />;
    }

    const onCreate = () => {
        if (text !== '') {
            createTodo({ body: { text }});
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
                            deleteHandler = { () => deleteTodo({ todoId: todo.id }) }
                            updateHandler = { () => updateTodo({
                                todoId: todo.id,
                                body:   { isCompleted: !todo.isCompleted },
                            }) }
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
