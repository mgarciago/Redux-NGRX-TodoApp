import { createAction, props } from '@ngrx/store';

export const create = createAction(
    '[TODO] Create',
    props<{ text: string }>()

);
export const toggleComplete = createAction(
    '[TODO] Toggle Complete',
    props<{ id: number }>()

);
export const edit = createAction(
    '[TODO] Edit',
    props<{ id: number, text: string }>()

);
export const deleteTodo = createAction(
    '[TODO] Delete Todo',
    props<{ id: number }>()

);
export const toggleCompleteAll = createAction(
    '[TODO] Toggle Complete All',
    props<{ completed: boolean }>()
);
export const clearCompleted = createAction('[TODO] Clear Completed')