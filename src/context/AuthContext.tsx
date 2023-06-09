import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { login, logout, onUserStateChange } from '@api/firebase';
import { AuthContextProps, UserType } from 'src/types';

const AuthContexnt = createContext({} as AuthContextProps);

export function AuthContexntProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    onUserStateChange((user: UserType) => {
      setUser(user);
    });
  }, []);

  return (
    <AuthContexnt.Provider
      value={{ user, uid: user && user.uid, login: login, logout: logout }}
    >
      {children}
    </AuthContexnt.Provider>
  );
}

export function useAuthContenxt() {
  return useContext(AuthContexnt);
}
