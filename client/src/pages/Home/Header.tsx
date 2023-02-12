import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import readingImage from '../../assets/reading-home-header.jpg';

export default function Header() {
  console.log('reading image:', readingImage);
  return (
    <header className="grid grid-cols-2">
      <div className="col-span-1 flex items-center justify-end bg-gray-100 p-20">
        <div className="max-w-2xl">
          <h1 className="font-semibold">
            The Easiest Way To Find Your Favorite Book
          </h1>
          <p className="mt-4">
            The list includes a book about Italien Architecture and landmark
            book about the Stock Market. There is also Poetry and a famous novel
            about time travel.
          </p>
          <Link to="/books" className="btn btn-lg btn-primary mt-8">
            Explore Our Books <FiArrowRight />
          </Link>
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, .3), rgba(0,0,0,.8)), url(' +
            readingImage +
            ')',
        }}
        className="flex h-screen max-h-[700px] items-end justify-end bg-cover bg-center p-12 text-right text-yellow-400"
      >
        <h1 className="text-7xl font-bold">
          To Succeed <br /> You Must Read
        </h1>
      </div>
    </header>
  );
}
