import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.interface';
import * as actions from './todo.actions';

export const initialState: Todo[] = [
    new Todo('Save the world'),
    new Todo('Win Thanos'),
    new Todo('Buy IronMan suit'),
    new Todo('Stole Captain America shield'),
];

export const todoReducer = createReducer(
    initialState,
    on(actions.create, (state, { text }) => [...state, new Todo(text)]),
    on(actions.deleteTodo, (state, { id }) => state.filter(todo => todo.id !== id)),
    on(actions.toggleComplete, (state, { id }) => {
        return state.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            } else {
                return todo;
            }
        });
    }),
    on(actions.edit, (state, { id, text }) => {
        return state.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    text: text,
                }
            } else {
                return todo;
            }
        });
    }),
    on(actions.toggleCompleteAll, (state, { completed }) => {
        return state.map((todo) => {
            return {
                ...todo,
                completed: completed,
            }
        })
    }),
    on(actions.clearCompleted, state => state.filter(todo => !todo.completed)),

);