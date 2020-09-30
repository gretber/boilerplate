export type Todo = {
    id: string
    text: string
    isCompleted: boolean
};

export type Todos = Array<Todo>;

// ----------------------------- Fetch -----------------------------
export const TODOS_FETCH_ASYNC = 'TODOS_FETCH_ASYNC';
export type TodosFetchAsyncType = {
    type: typeof TODOS_FETCH_ASYNC;
};
export type TodosFetchAsyncContract = () => TodosFetchAsyncType

export const TODOS_FILL = 'TODOS_FILL';
export type TodosFillType = {
    type: typeof TODOS_FILL;
    payload: Todos;
};
export type TodosFillContract = (payload: Todos) => TodosFillType

// ----------------------------- Create -----------------------------
export const SET_TODO = 'SET_TODO';
export type SetTodoActionType = {
    type: typeof SET_TODO;
    payload: Todo;
};
export type SetTodoContract = (payload: Todo) => SetTodoActionType

// ----------------------------- Update -----------------------------
export const UPDATE_TODO = 'UPDATE_TODO';
export type UpdateTodoActionType = {
    type: typeof UPDATE_TODO;
    payload: Todo;
};
export type UpdateTodoContract = (payload: Todo) => UpdateTodoActionType

// ----------------------------- Delete -----------------------------
export const DELETE_TODO = 'DELETE_TODO';
export type DeleteTodoActionType = {
    type: typeof DELETE_TODO;
    payload: string;
};
export type DeleteTodoContract = (payload: string) => DeleteTodoActionType

export type TodosActionTypes =
    | TodosFillType
    | TodosFetchAsyncType
    | SetTodoActionType
    | UpdateTodoActionType
    | DeleteTodoActionType

