import { Link } from 'react-router-dom';
import {
  FiArrowDown,
  FiArrowUp,
  FiBook,
  FiChevronDown,
  FiGlobe,
  FiHash,
  FiHeart,
  FiHome,
  FiInbox,
  FiMenu,
  FiPhone,
  FiShoppingCart,
  FiUser,
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

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="bg-gray-900 py-6 text-sm font-medium text-white">
      <div className="container mx-auto space-y-6">
        <div className="flex items-center gap-x-12">
          {/* logo */}
          <div>
            <h1 className="text-5xl font-semibold xl:text-6xl">bookstore</h1>
            <div className="ml-0.5 text-yellow-500">Read More, Learn More</div>
          </div>
          {/* links */}
          <div className="flex-1 space-y-6">
            <div className="flex-between gap-8">
              <div>
                <p className="hidden lg:block">Free delivery over 300 DT</p>
              </div>
              <div className="flex items-center gap-8">
                <Link to="/about" className="navlink hidden md:flex">
                  <FiUsers className="icon" />
                  <div>About Us</div>
                </Link>
                <Link to="/contact" className="navlink hidden xl:flex">
                  <FiInbox className="icon" />
                  <div>Contact Us</div>
                </Link>
                <button className="navlink text-white">
                  <FiGlobe className="h-5 w-5" />
                  EN <FiChevronDown />
                </button>
                <div className="navlink text-white">
                  <FiPhone className="h-5 w-5" />
                  (+216) 50101959
                </div>
              </div>
            </div>
            <div className="flex-between gap-8">
              <div className="flex items-center gap-8">
                <Link to="/" className="navlink hidden lg:flex">
                  <FiHome className="icon" />
                  <div>Home</div>
                </Link>
                <Link to="/books" className="navlink hidden lg:flex">
                  <FiBook className="icon" />
                  <div>Books</div>
                </Link>
                <Link to="/genres" className="navlink hidden lg:flex">
                  <FiHash className="icon" />
                  <div>Genres</div>
                </Link>

                {/* admin only, it is recommended to add author before adding its books, although it's possible for the "authorId" field to be empty */}
                <Link to="/authors" className="navlink hidden xl:flex">
                  <FiUsers className="icon" />
                  <div>Authors</div>
                </Link>
              </div>
              <div className="flex items-center gap-8">
                <Link to="/cart" className="navlink">
                  <FiShoppingCart className="icon" />
                  <div className="hidden sm:block">Cart - 0 Items</div>
                  <div className="sm:hidden">0</div>
                </Link>
                <Link to="/wishlist" className="navlink hidden xl:flex">
                  <FiHeart className="icon" />
                  <div>Wishlist</div>
                </Link>
                <Link
                  to={isLoggedIn ? '/account' : '/login'}
                  className="navlink hidden md:flex"
                >
                  <FiUser className="icon" />
                  <div>{isLoggedIn ? 'Account' : 'Login'}</div>
                </Link>
                <button
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className="navlink group xl:hidden"
                >
                  <FiMenu className="icon" />
                  Menu
                  {navbarOpen ? (
                    <FiArrowUp className="duration-75 group-hover:-translate-y-0.5" />
                  ) : (
                    <FiArrowDown className="duration-75 group-hover:translate-y-0.5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        {navbarOpen && (
          <div className="xl:hidden">
            <Link to="/" className="navlink mobile lg:hidden">
              <FiHome className="icon" />
              <div>Home</div>
            </Link>
            <Link to="/books" className="navlink mobile lg:hidden">
              <FiBook className="icon" />
              <div>Books</div>
            </Link>
            <Link to="/genres" className="navlink mobile lg:hidden">
              <FiHash className="icon" />
              Genres
            </Link>
            <Link to="/authors" className="navlink mobile">
              <FiUsers className="icon" />
              Authors
            </Link>
            <Link to="/wishlist" className="navlink mobile">
              <FiHeart className="icon" />
              <div>Wishlist</div>
            </Link>
            <Link
              to={isLoggedIn ? '/account' : '/login'}
              className="navlink mobile md:hidden"
            >
              <FiUser className="icon" />
              <div>{isLoggedIn ? 'Account' : 'Login'}</div>
            </Link>
            <Link to="/about" className="navlink mobile md:hidden">
              <FiUsers className="icon" />
              <div>About Us</div>
            </Link>
            <Link to="/contact" className="navlink mobile">
              <FiInbox className="icon" />
              <div>Contact Us</div>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
