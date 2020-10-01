export type Todo = {
    id: string
    text: string
    isCompleted: boolean
};

export type Todos = Array<Todo>;

// ----------------------------- Fetch -----------------------------
export const TODOS_FETCH_ASYNC = 'TODOS_FETCH_ASYNC';
export type TodosFetchAsyncActionType = {
    type: typeof TODOS_FETCH_ASYNC;
};
export type TodosFetchAsyncContract = () => TodosFetchAsyncActionType

export const TODOS_FILL = 'TODOS_FILL';
export type TodosFillActionType = {
    type: typeof TODOS_FILL;
    payload: Todos;
};
export type TodosFillContract = (payload: Todos) => TodosFillActionType

// ----------------------------- Create -----------------------------
type CreateTodoPayloadType = {
    body: {
        text: string
    }
}
export const CREATE_TODO_ASYNC = 'CREATE_TODO_ASYNC';
export type CreateTodoAsyncActionType = {
    type: typeof CREATE_TODO_ASYNC;
    payload: CreateTodoPayloadType;
};
export type CreateTodoAsyncContract = (payload: CreateTodoPayloadType) => CreateTodoAsyncActionType

export const CREATE_TODO_SYNC = 'CREATE_TODO_SYNC';
export type CreateTodoSyncActionType = {
    type: typeof CREATE_TODO_SYNC;
    payload: Todo;
};
export type CreateTodoSyncContract = (payload: Todo) => CreateTodoSyncActionType

// ----------------------------- Update -----------------------------
type UpdateTodoPayloadType = {
    todoId: string,
    body:   { isCompleted: boolean },
}
export const UPDATE_TODO_ASYNC = 'UPDATE_TODO_ASYNC';
export type UpdateTodoAsyncActionType = {
    type: typeof UPDATE_TODO_ASYNC;
    payload: UpdateTodoPayloadType;
};
export type UpdateTodoAsyncContract = (payload: UpdateTodoPayloadType) => UpdateTodoAsyncActionType

export const UPDATE_TODO_SYNC = 'UPDATE_TODO_SYNC';
export type UpdateTodoSyncActionType = {
    type: typeof UPDATE_TODO_SYNC;
    payload: UpdateTodoPayloadType;
};
export type UpdateTodoSyncContract = (payload: UpdateTodoPayloadType) => UpdateTodoSyncActionType

// ----------------------------- Delete -----------------------------
export const DELETE_TODO_ASYNC = 'DELETE_TODO_ASYNC';
export type DeleteTodoAsyncActionType = {
    type: typeof DELETE_TODO_ASYNC;
    payload: string;
};
export type DeleteTodoAsyncContract = (payload: string) => DeleteTodoAsyncActionType

export const DELETE_TODO_SYNC = 'DELETE_TODO_SYNC';
export type DeleteTodoSyncActionType = {
    type: typeof DELETE_TODO_SYNC;
    payload: string;
};
export type DeleteTodoSyncContract = (payload: string) => DeleteTodoSyncActionType

export type TodosActionTypes =
    | TodosFillActionType
    | CreateTodoSyncActionType
    | UpdateTodoSyncActionType
    | DeleteTodoSyncActionType

