import {
  FiArrowDown,
  FiArrowLeft,
  FiArrowRight,
  FiBook,
  FiDollarSign,
  FiFilePlus,
  FiFilter,
  FiFolderPlus,
  FiHash,
  FiPlus,
  FiSearch,
  FiUpload,
  FiUser,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import BookCard from '../../components/BookCard';
import { books20 } from '../../fakeData';

export default function Books() {
  return (
    <div className="container mx-auto py-16">
      <div className="flex-between">
        <div>
          <h2 className="font-bold">All Books</h2>
          <p className="text-sm text-gray-400">
            We hope that you'll find what you're looking for.
          </p>
        </div>
        <div>
          {/* admin only */}
          <Link to="/books/add" className="btn-common btn-primary btn-lg">
            <FiUpload className="mr-1 h-5 w-5" /> Add Book
          </Link>
        </div>
      </div>
      {/* Filters */}
      <div className="mt-10 flex text-sm">
        <div className="flex flex-1 overflow-hidden rounded-l-lg border border-r-0 border-gray-300 font-medium">
          <div className="flex flex-shrink-0 items-center gap-2 border-r border-gray-300 bg-gray-100 py-4 px-6">
            <FiFilter className="h-4 w-4" /> Filter By
          </div>
          <button className="flex items-center gap-2 border-r border-gray-300 p-4">
            <FiHash className="h-4 w-4" /> Genre <FiArrowDown />
            {/* when clicked, show menu to check all the genres that use wants to be displayed */}
          </button>
          <button className="flex items-center gap-2 border-r border-gray-300 p-4">
            <FiUser className="h-4 w-4" /> Author <FiArrowDown />
            {/* when clicked, show menu to check all the authors that use wants to be displayed */}
          </button>
          <button className="flex items-center gap-2 border-r border-gray-300 p-4">
            <FiDollarSign className="h-4 w-4" />
            Price
            <FiArrowDown />
            {/* when clicked, show slider to allow user to set min and max price  */}
          </button>
        </div>
        <button className="btn-common ml-auto rounded-none rounded-r-lg border border-gray-300 bg-gray-100 py-4 px-6 font-medium text-black shadow-none hover:border-transparent hover:bg-gray-800 hover:text-white">
          Search
          <FiSearch className="ml-1 h-4 w-4" />
        </button>
      </div>
      <div className="mt-8 grid grid-cols-5 gap-6">
        {books20.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
      <div className="flex-end mt-10">
        <div className="flex divide-x overflow-hidden rounded-lg border border-gray-300 text-center text-sm font-medium text-gray-700">
          {/* todo: add disabled styles for prev button for when the user is in the 1st page */}
          <button className="flex-center px-5 py-3 hover:bg-gray-100">
            <FiArrowLeft className="mr-1 text-gray-400" /> Prev
          </button>
          <button className="flex-center px-5 py-3 hover:bg-gray-100">1</button>
          {/* current page styles */}
          <button className="flex-center cursor-default bg-gray-800 px-5 py-3 text-white">
            2
          </button>
          <button className="flex-center px-5 py-3 hover:bg-gray-100">3</button>
          <button className="flex-center px-5 py-3 hover:bg-gray-100">4</button>
          <button className="flex-center px-5 py-3 hover:bg-gray-100">5</button>
          <button className="flex-center px-5 py-3 hover:bg-gray-100">1</button>
          <button className="flex-center px-5 py-3 hover:bg-gray-100">
            Next <FiArrowRight className="ml-1 text-gray-400" />
          </button>
          {/* todo: add disabled styles for next button for when the user is in the last page */}
        </div>
      </div>
    </div>
  );
}
