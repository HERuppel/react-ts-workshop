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

interface LoginResponse {
  user: User;
  token: string;
}

interface AuthContextData {
  user: User;
  signIn: (credentials: AuthCredentials) => Promise<void>;
  signUp: (userData: SignUpData) => Promise<Response<User>>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>(() => {
    const storagedUser = localStorage.getItem('@krud:user');
    const storagedToken = localStorage.getItem('@krud:token');

    if (storagedUser && storagedToken) {
      api.defaults.headers.common['authorization'] = `Bearer ${storagedToken}`;
      return JSON.parse(storagedUser);
    }
    return {} as User;
  });

  const signIn = useCallback(async (credentials: AuthCredentials) => {
    const { data }: { data: Response<LoginResponse> } = await api.post('auth/login', credentials);

    localStorage.setItem('@krud:user', JSON.stringify(data.content?.user));
    localStorage.setItem('@krud:token', data.content?.token as string);

    api.defaults.headers.common['authorization'] = `Bearer ${data.content?.token}`;

    setUser(data.content?.user as User);
  }, []);

  const signUp = useCallback(async (userData: SignUpData): Promise<Response<User>> => {
    const { data }: { data: Response<User> } = await api.post('user/create', userData);

    return data;
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
    throw new Error('Este hook deve ser utilizado dentro de seu provider');
  }

  return context;
};
