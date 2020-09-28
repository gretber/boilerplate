export type Todo = {
    id: string
    text: string
    isCompleted: boolean
};

export type Todos = Array<Todo>;

export type FetchTodos = () => Promise<Todos>;

export type loadingAction = (value: boolean) => void;

// Get
type GetTodosInput = {
    setTodos: (todos: Todos) => void,
    loadingAction: loadingAction
}
export type GetTodos = (input: GetTodosInput) => Promise<void>

// Create
export type CreateTodoInput = {
    body: {
        text: string
    },
    setTodo: (newTodo: Todo) => void,
    loadingAction: loadingAction
};
export type CreateTodo = (input: CreateTodoInput) => Promise<void>;

// Update
export type UpdateTodoInput = {
    todoId: string
    body: {
        isCompleted: boolean
    },
    updateTodo: (newTodo: Todo) => void,
    loadingAction: loadingAction
};
export type UpdateTodo = (input: UpdateTodoInput) => Promise<void>;

// Delete
export type DeleteTodoInput = {
    todoId: string,
    deleteTodo: (newTodo: string) => void,
    loadingAction: loadingAction
};
export type DeleteTodo = (input: DeleteTodoInput) => Promise<void>;

// Action Types
export const SET_TODOS = 'SET_TODOS';
export const SET_TODO = 'SET_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export type SetTodosType = typeof SET_TODOS;
export type SetTodoType = typeof SET_TODO;
export type UpdateTodoType = typeof UPDATE_TODO;
export type DeleteTodoType = typeof DELETE_TODO;

type SetTodosActionType = {
    type: SetTodosType,
    payload: Todos
}

type SetTodoActionType = {
    type: SetTodoType,
    payload: Todo
}

type UpdateTodoActionType = {
    type: UpdateTodoType,
    payload: Todo
}

type DeleteTodoActionType = {
    type: DeleteTodoType,
    payload: string
}

export type TodosActionTypes =
    | SetTodosActionType
    | SetTodoActionType
    | UpdateTodoActionType
    | DeleteTodoActionType
