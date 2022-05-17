/* eslint-disable @typescript-eslint/no-non-null-assertion */
// import { User } from 'src/types';
import create from 'zustand';
import { User } from '../types';

type UserStore = {
  user?: User;
};

const useUserStore = create<UserStore>(() => ({
  user: undefined,
}));

export default useUserStore;

export function setUser(user?: User): void {
  useUserStore.setState({
    user,
  });
}

export function updateUser(user: Partial<User>): void {
  useUserStore.setState({
    user: {
      ...useUserStore.getState().user!,
      ...user,
    },
  });
}
