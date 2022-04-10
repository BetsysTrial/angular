import { Action, createReducer, on } from '@ngrx/store';
import { initialUserState, UsersState } from './users.state';
import { loadUsersSuccessAction } from './users.actions';

const reducer = createReducer(
    initialUserState,
    on(loadUsersSuccessAction, (state, action) => ({...state, list: action.users})),
);

export const usersReducer = (
    state: UsersState = initialUserState,
    action: Action
): UsersState => reducer(state, action);
