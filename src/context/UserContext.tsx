/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Spin } from 'antd';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { authApi } from '../api';
import { User } from '../types';
import notification from '../utils/notification';
import jwtDecode from 'jwt-decode';
import { useHistory, useLocation } from 'react-router';

type UserContextValues = {
  user?: User;
  setUser: (data: User) => void;
  getUser: () => void;
  signOut: () => void;
};

const UserContext = createContext<UserContextValues>(undefined as never);

const useUser = (): UserContextValues => useContext(UserContext);

const UserProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const location = useLocation();
  const history = useHistory();
  const [user, setUser] = useState<User | undefined>(() => {
    const token = localStorage.getItem('token');
    if (!token) return undefined;

    const decode: User = jwtDecode(token.replace('Bearer ', ''));
    return decode;
  });
  const [isLoading, SetIsLoading] = useState<boolean>(false);

  console.log(`userContext`, { user });

  const handleRemoveToken = () => {
    localStorage.removeItem('token');
  };

  const getUser = async () => {
    authApi
      .me()
      .then(({ data }) => setUser(data))
      .catch((err: any) => notification('error', err?.response?.message[0]))
      .finally(() => SetIsLoading(false));
  };

  const handleSetUser = (data: User) => {
    setUser(data);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;
    SetIsLoading(true);
    getUser();
  }, []);

  const signOut = () => {
    // Remove token from localStorage
    handleRemoveToken();
    setUser(undefined);
    notification('success', 'Đăng xuất thành công');
    if (!location.pathname.includes('/login')) history.push('/login');
  };

  return (
    <UserContext.Provider value={{ user, getUser, signOut, setUser: handleSetUser }}>
      <Spin size="large" spinning={isLoading}>
        {children}
      </Spin>
    </UserContext.Provider>
  );
};

export { useUser, UserProvider };
