import { Action, createReducer } from '@ngrx/store';
import { initialUserState, UsersState } from './users.state';

const reducer = createReducer(
    initialUserState,
);

export const usersReducer = (
    state: UsersState = initialUserState,
    action: Action
): UsersState => reducer(state, action);
