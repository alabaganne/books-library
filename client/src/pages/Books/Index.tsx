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
  FiUsers,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import BookCard from '../../components/BookCard';
import BooksList from '../../components/BooksList';
import Pagination from '../../components/Pagination';
import { books30 } from '../../fakeData';

const styles = {
  filterBtn: 'btn-outline-light group flex items-center gap-2 rounded-lg p-4',
  translateDown: 'duration-75 group-hover:translate-y-0.5',
};

export default function Books() {
  return (
    <div className="container mx-auto py-16">
      <div className="flex-between flex-wrap gap-x-10 gap-y-6">
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
      <div className="mt-10 flex flex-wrap items-center gap-4 text-sm font-medium">
        <span className="inline-flex items-center gap-2 rounded-lg bg-gray-900 p-4 text-white">
          <FiFilter className="h-4 w-4" /> Filters <FiArrowRight />
        </span>
        <button className={styles.filterBtn + ''}>
          <FiHash className="h-4 w-4" /> Genre{' '}
          <FiArrowDown className={styles.translateDown} />
          {/* when clicked, show menu to check all the genres that use wants to be displayed */}
        </button>
        {/* <button className="flex items-center gap-2 border-r border-gray-300 p-4">
            <FiUsers className="h-4 w-4" /> Author <FiArrowDown />
          </button> */}
        <button className={styles.filterBtn}>
          <FiDollarSign className="h-4 w-4" />
          Price
          <FiArrowDown className={styles.translateDown} />
          {/* when clicked, show slider to allow user to set min and max price  */}
        </button>
        <form className="flex w-full max-w-lg lg:ml-auto" action="">
          <input
            type="text"
            className="w-full rounded-l-lg border border-r-0 border-gray-300 px-5 py-4 outline-none focus:placeholder-transparent"
            placeholder="Search by book name, author, ..."
          />
          <button className="btn-common rounded-none rounded-r-lg border border-gray-300 bg-gray-100 p-4 text-black shadow-none hover:border-transparent hover:bg-gray-900 hover:text-white">
            <FiSearch className="h-5 w-5" />
          </button>
        </form>
      </div>
      <div className="mt-8">
        <BooksList books={books30} />
      </div>
      <div className="flex-end mt-10">
        <Pagination />
      </div>
    </div>
  );
}
