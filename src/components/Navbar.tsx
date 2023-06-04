import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { BsFillPencilFill } from 'react-icons/bs';
import { login, logout, onUserStateChange } from '@api/firebase';
import { useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import Users from './Users';
import Button from './ui/Button';

interface CoustomUser extends User {
  isAdmin: boolean;
}

type UserProps = null | CoustomUser;

const Navbar = () => {
  const [user, setUser] = useState<UserProps>();

  useEffect(() => {
    onUserStateChange((user: UserProps) => {
      setUser(user);
    });
  }, []);

  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <FiShoppingBag />
        <h1>Like Shop</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        <Link to="carts">Carts</Link>
        {user && user.isAdmin && (
          <Link to="/products/new" className="text-2xl">
            <BsFillPencilFill />
          </Link>
        )}
        {user && <Users user={user} />}
        {!user && <Button text={'login'} onClick={login} />}
        {user && <Button text={'logout'} onClick={logout} />}
      </nav>
    </header>
  );
};

export default Navbar;
