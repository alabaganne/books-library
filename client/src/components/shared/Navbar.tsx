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
      <div className="container mx-auto py-6">
        <div className="flex items-center gap-20">
          <div>
            <h1 className="font-semibold">bookstore</h1>
            <div>Read More, Learn More</div>
          </div>
          <div className="flex-1 space-y-6">
            <div className="flex-between">
              <div>
                Free delivery over <strong>300 DT</strong>. Order gifts by the
                end of <strong>21 Dec</strong>
              </div>
              <div className="flex items-center gap-8">
                <Link to="/" className="nav-link">
                  <FiUsers className="h-5 w-5" />
                  <div>About Us</div>
                </Link>
                <Link to="/" className="nav-link">
                  <FiInbox className="h-5 w-5" />
                  <div>Contact Us</div>
                </Link>
                <Link to="/" className="nav-link">
                  <FiMapPin className="h-5 w-5" />
                  <div>See Our Store Locations</div>
                </Link>
              </div>
            </div>
            <div className="flex-between">
              <div className="flex items-center gap-8">
                <Link to="/" className="nav-link">
                  <FiHome className="h-5 w-5" />
                  <div>Home</div>
                </Link>
                <Link to="/books" className="nav-link">
                  <FiBook className="h-5 w-5" />
                  <div>Books</div>
                </Link>
                <Link to="/" className="nav-link">
                  <FiHash className="h-5 w-5" />
                  <div>Genres</div>
                </Link>

                {/* admin only, it is recommended to add author before adding its books, although it's possible for the "authorId" field to be empty */}
                <Link to="/" className="nav-link">
                  <FiUsers className="h-5 w-5" />
                  <div>Authors</div>
                </Link>
              </div>
              <div className="flex items-center gap-8">
                <Link to="/cart" className="nav-link">
                  <FiShoppingCart className="h-5 w-5" />
                  <div>Cart - 0 Items</div>
                </Link>
                <Link to="/wishlist" className="nav-link">
                  <FiHeart className="h-5 w-5" />
                  <div>Wishlist</div>
                </Link>
                <Link
                  to={isLoggedIn ? '/account' : '/login'}
                  className="nav-link"
                >
                  <FiUser className="h-5 w-5" />
                  <div>{isLoggedIn ? 'Account' : 'Login'}</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
