import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { BsFillPencilFill } from 'react-icons/bs';
import { login, logout, onUserStateChange } from '@api/firebase';
import { useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import Users from './Users';

type UserProps = null | User;

const Navbar = () => {
  const [user, setUser] = useState<UserProps>();

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

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
        {user && <Users user={user} />}
        {!user && <button onClick={login}>Login</button>}
        {user && <button onClick={logout}>logout</button>}
      </nav>
    </header>
  );
};

export default Navbar;
