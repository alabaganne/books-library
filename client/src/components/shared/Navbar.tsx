import { Link } from 'react-router-dom';
import {
  FiChevronDown,
  FiGlobe,
  FiHeart,
  FiLogIn,
  FiMap,
  FiMapPin,
  FiPhone,
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiUserPlus,
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
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto py-7">
        <div className="flex items-center justify-between">
          <div>
            Free delivery over <strong>300 DT</strong>. Order gifts by the end
            of <strong>21 December</strong>
          </div>
          <div className="flex items-center gap-8">
            <div className="group relative flex cursor-default items-center">
              <div className={'fi ' + language.flagIconClass}></div>
              <span className="ml-2 mr-1">{language.name}</span>
              <FiChevronDown className="h-3" />
              <div className="absolute top-full right-0 hidden pt-2 group-hover:block">
                <div className="w-40 divide-y overflow-hidden rounded bg-white text-black shadow-md">
                  {languages.map((lang) => (
                    <button
                      key={lang.name}
                      onClick={() => setLanguage(lang)}
                      className="flex w-full items-center px-4 py-3 hover:bg-gray-100"
                    >
                      <span className={'fi ' + lang.flagIconClass}></span>
                      <div className="ml-2">{lang.fullName}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FiPhone className="h-5 w-5" />
              <span>(+216) 50101959</span>
            </div>
            <Link to="/" className="flex items-center gap-2">
              <FiMapPin className="h-5 w-5" />
              <span>Find Our Stores -&gt;</span>
            </Link>
          </div>
        </div>
        <div className="mt-16 flex items-end justify-between gap-12">
          <Link to="/">
            <h1 className="text-6xl font-bold">bookstore</h1>
            <div>Read More, Learn More</div>
          </Link>
          <div className="flex flex-1 items-center justify-between gap-10">
            <form className="form-control flex max-w-2xl flex-1 items-center rounded-md">
              <input
                type="text"
                placeholder="Search for Books, Authors, Genres..."
                className="min-w-fit flex-1 outline-none focus:placeholder-transparent"
              />
              <button>
                <FiSearch className="h-6 w-6 text-gray-800" />
              </button>
            </form>
            <div className="flex items-center gap-8">
              <Link
                to={isLoggedIn ? '/account' : '/register'}
                className="flex items-center gap-2"
              >
                <div className="flex-center h-9 w-9 rounded-full border-2 border-gray-200 bg-white p-1 text-black">
                  <FiUser className="h-5 w-5" />
                </div>
                <span>{isLoggedIn ? 'My Account' : 'Register'}</span>
              </Link>
              <Link to="/cart" className="flex items-center gap-2">
                <div className="flex-center h-9 w-9 rounded-full border-2 border-gray-200 bg-white p-1 text-black">
                  <FiShoppingCart className="h-5 w-5" />
                </div>
                <span>Cart - 0 Items</span>
              </Link>
              <Link to="/wishlist" className="flex items-center gap-2">
                <div className="flex-center h-9 w-9 rounded-full border-2 border-gray-200 bg-white p-1 text-black">
                  <FiHeart className="h-5 w-5" />
                </div>
                <span>Wishlist</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
