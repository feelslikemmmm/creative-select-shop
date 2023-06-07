import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { User, UserCredential } from 'firebase/auth';
import { login, logout, onUserStateChange } from '@api/firebase';

interface AuthContextProps {
  user: UserProps | undefined;
  uid: string | null | undefined;
  login: () => Promise<void | UserCredential>;
  logout: () => Promise<void>;
}

interface CoustomUser extends User {
  isAdmin: boolean;
}

type UserProps = null | CoustomUser;

const AuthContexnt = createContext({} as AuthContextProps);

export function AuthContexntProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProps>();

  useEffect(() => {
    onUserStateChange((user: UserProps) => {
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
