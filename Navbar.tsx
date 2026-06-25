import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  userRole: string | null;
  logout: () => void;
}

const Navbar = ({ userRole, logout }: NavbarProps) => {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold tracking-tight text-gray-900">
        Shop<span className="text-indigo-600">Ease</span>
      </Link>

      <div className="flex items-center gap-6 font-medium text-gray-600">
        <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
        <Link to="/cart" className="relative hover:text-indigo-600 transition">
          Cart
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-indigo-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold animate-pulse">
              {totalItems}
            </span>
          )}
        </Link>
        
        {userRole === 'admin' && (
          <Link to="/admin" className="text-amber-600 hover:text-amber-700 font-semibold">Admin Panel</Link>
        )}

        {userRole ? (
          <button onClick={logout} className="bg-gray-900 text-white px-4 py-2 rounded-xl text-sm hover:bg-gray-800 transition">
            Logout
          </button>
        ) : (
          <Link to="/login" className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-indigo-700 transition">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
