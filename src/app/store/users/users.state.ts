import { User } from '../../models/user.model';

export interface UsersState {
    list: User[],
}

export const initialUserState: UsersState = {
    list: [],
};
