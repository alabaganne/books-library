import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="col-span-1 flex items-center justify-end bg-gray-100 p-20">
          <div className="max-w-[600px]">
            <h1 className="text-5xl font-semibold">
              The Easiest Way To Find Your Favorite Book
            </h1>
            <p className="mt-8">
              The list includes a book about Italien Architecture and landmark
              book about the Stock Market. There is also Poetry and a famous
              novel about time travel.
            </p>
            <Link
              to="/books"
              className="mt-6 inline-flex items-center gap-2 rounded bg-indigo-500 px-5 py-3 font-semibold text-white shadow hover:bg-indigo-600"
            >
              Explore Books <FiArrowRight />
            </Link>
          </div>
        </div>
        <div className="bg-yellow-400"></div>
      </div>
      <div className="container mx-auto py-16"></div>
    </div>
  );
}

export default Home;
