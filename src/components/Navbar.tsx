import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { BsFillPencilFill } from 'react-icons/bs';
import { login, logout, onUserStateChange } from '@api/firebase';
import { useEffect, useState } from 'react';
import { User } from 'firebase/auth';

type UserProps = null | User;

const Navbar = () => {
  const [user, setUser] = useState<UserProps>();

  useEffect(() => {
    onUserStateChange((user: UserProps) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  const handleLogin = () => {
    login().then((result: User | void) => {
      setUser(result as User);
      console.log('login success', user);
    });
  };

  const handleLogout = () => {
    logout().then(setUser);
  };

  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <FiShoppingBag />
        <h1>Shopping App</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        <Link to="carts">Carts</Link>
        <Link to="/products/new" className="text-2xl">
          <BsFillPencilFill />
        </Link>
        {!user && <button onClick={handleLogin}>Login</button>}
        {user && <button onClick={handleLogout}>logout</button>}
      </nav>
    </header>
  );
};

export default Navbar;
