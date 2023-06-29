import { Link } from 'react-router-dom';
import { BsFillPencilFill } from 'react-icons/bs';
import Users from './Users';
import Button from './ui/Button';
import { useAuthContenxt } from '@context/AuthContext';
import CartStatus from './CartStatus';

const Navbar = () => {
  const { user, login, logout } = useAuthContenxt();

  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link
        to="/"
        className="flex items-center text-sm md:text-lg text-[#555555] hover:text-[blue]"
      >
        <h1>Creative Select Shop</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold  text-sm md:text-md text-[#555555]">
        <Link to="/products" className="hover:text-[blue]">
          Products
        </Link>
        {user && (
          <Link to="/cart">
            <CartStatus />
          </Link>
        )}
        {user && user.isAdmin && (
          <Link
            to="/products/new"
            className="text-sm md:text-2xl text-[#555555]"
          >
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
