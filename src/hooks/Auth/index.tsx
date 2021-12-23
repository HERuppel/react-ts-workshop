import React, { createContext, useCallback, useContext, useState } from 'react';
import { User } from '../../@types/User';

interface AuthCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn: (credentials: AuthCredentials) => void;
  signUp: (user: User) => void;
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

  const signIn = useCallback(() => {
    // TODO
  }, []);

  const signUp = useCallback(() => {
    // TODO
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
