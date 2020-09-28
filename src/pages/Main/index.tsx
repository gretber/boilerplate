// Core
import React, { useState } from 'react';

// Components
import { Todo } from '../../components';

// Elements
import { Button } from '../../elements';

// Redux
import { useTodosQuery, useTodosMutations } from '../../bus/todos';

// Styles
import { Header } from './styles';

// Types
import { Todo as TodoType } from '../../bus/todos/types';

export const Main = () => {
    const [ text, setText ] = useState('');
    const { data } = useTodosQuery();
    const { createMutation, updateMutation, deleteMutation } = useTodosMutations();

    if (!data) {
        return <div>Loading...</div>;
    }

    const onCreate = () => {
        if (text !== '') {
            createMutation({ text });
            setText('');
        }
    };

    return (
        <section>
            <Header>
                <input
                    value = { text }
                    onChange = { (event) => setText(event.target.value) }
                />
                <Button onClick = { onCreate }>Create</Button>
            </Header>
            <main>
                {
                    data.map((todo: TodoType, index: number) => (
                        <Todo
                            isColor = { Boolean(index % 2) }
                            key = { todo.id }
                            { ...todo }
                            deleteHandler = { () => void deleteMutation(todo.id) }
                            updateHandler = { () => void updateMutation({ isCompleted: !todo.isCompleted }, todo.id) }
                        />
                    ))
                }
            </main>
        </section>
    );
};
