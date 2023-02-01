import { User } from '../../models/user';
export interface UsersState {
  users: User[]
}

export const initialUserState: UsersState = {
  users: []
};
