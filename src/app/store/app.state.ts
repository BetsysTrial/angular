import { initialUserState, UsersState } from './users/users.state';

export interface AppState {
    usersState: UsersState;
}

export function initialAppState(): AppState {
    return {
        usersState: initialUserState
    };
}
