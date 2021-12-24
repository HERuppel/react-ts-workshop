import React, { createContext, useCallback, useContext, useState } from 'react';
import { User } from '../../@types/User';
import { Response } from '../../@types/Response';
import { api } from '../../services/api';

interface AuthCredentials {
  email: string;
  password: string;
}

interface SignUpData {
  email: string;
  name: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn: (credentials: AuthCredentials) => void;
  signUp: (userData: SignUpData) => Promise<Response<User>>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>(() => {
    const storageUser = localStorage.getItem('@krud:user');

    if (storageUser) {
      return JSON.parse(storageUser);
    }
    return {} as User;
  });

  const signIn = useCallback(async (credentials: AuthCredentials) => {
    try {
      const { data }: { data: Response<User> } = await api.post('auth/login', credentials);

      localStorage.setItem('@krud:user', JSON.stringify(data.content));
      setUser(data.content as User);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      throw new Error(err);
    }
  }, []);

  const signUp = useCallback(async (userData: SignUpData): Promise<Response<User>> => {
    try {
      const { data }: { data: Response<User> } = await api.post('user/create', userData);

      return data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      throw new Error(err);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('This feature must be used within a provider');
  }

  return context;
};
