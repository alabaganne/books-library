import { Link } from 'react-router-dom';
import {
  FiBook,
  FiChevronDown,
  FiGlobe,
  FiHash,
  FiHeart,
  FiHome,
  FiInbox,
  FiInfo,
  FiLogIn,
  FiMap,
  FiMapPin,
  FiPhone,
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiUserPlus,
  FiUsers,
} from 'react-icons/fi';
import { useState } from 'react';

interface Language {
  name: string;
  fullName: string;
  flagIconClass: string; // class for icon
}

function Navbar() {
  let isLoggedIn = false;

  const languages: Array<Language> = [
    { name: 'EN', fullName: 'English', flagIconClass: 'fi-us' },
    { name: 'FR', fullName: 'French', flagIconClass: 'fi-fr' },
    { name: 'AR', fullName: 'العربية', flagIconClass: 'fi-tn' }, // will remove mostly because having a website in arabic requires inverting the content which takes a lot of time
  ];
  const [language, setLanguage] = useState(languages[0]);

  return (
    <nav className="bg-gray-900 text-sm text-white">
      <div className="container mx-auto py-7">
        <div className="flex items-center justify-between gap-20">
          <div className="flex items-center gap-20">
            <div>
              <h1 className="text-5xl font-semibold">bookstore</h1>
              <div>Read More, Learn More</div>
            </div>
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center gap-2">
                <FiHome className="h-5 w-5" />
                <div>Home</div>
              </Link>
              <Link to="/" className="flex items-center gap-2">
                <FiBook className="h-5 w-5" />
                <div>Books</div>
              </Link>
              <Link to="/" className="flex items-center gap-2">
                <FiHash className="h-5 w-5" />
                <div>Genres</div>
              </Link>
              <Link to="/" className="flex items-center gap-2">
                <FiUsers className="h-5 w-5" />
                <div>About Us</div>
              </Link>
              <Link to="/" className="flex items-center gap-2">
                <FiInbox className="h-5 w-5" />
                <div>Contact Us</div>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <Link to="/cart" className="flex items-center gap-2">
              <FiShoppingCart className="h-5 w-5" />
              <div>Cart - 0 Items</div>
            </Link>
            <Link to="/wishlist" className="flex items-center gap-2">
              <FiHeart className="h-5 w-5" />
              <div>Wishlist</div>
            </Link>
            <Link
              to={isLoggedIn ? '/account' : '/login'}
              className="flex items-center gap-2"
            >
              <FiUser className="h-5 w-5" />
              <div>{isLoggedIn ? 'Account' : 'Login'}</div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
