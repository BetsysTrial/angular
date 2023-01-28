import { Action, createReducer, on } from '@ngrx/store';
import { initialUserState, UsersState } from './users.state';
import { loadUsersSuccess } from './users.actions';

const reducer = createReducer(
  initialUserState,
  on(loadUsersSuccess, (state, { payload }) => ({ users: payload, message: 'Success' }))
);

export const usersReducer = (
    state: UsersState = initialUserState,
    action: Action
): UsersState => reducer(state, action);
