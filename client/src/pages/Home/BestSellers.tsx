import { Link } from 'react-router-dom';
import BookCard from '../../components/BookCard';
import Book from '../../interfaces/book';
import { books5 } from '../../fakeData';
import BooksList from '../../components/BooksList';

export default function BestSellers() {
  return (
    <div>
      <div className="flex-between">
        <h2>Best Seller Products</h2>
        <Link to="/books" className="btn-lg btn-primary btn-common">
          See All Books -&gt;
        </Link>
      </div>
      <div className="mt-8">
        <BooksList books={books5} />
      </div>
    </div>
  );
}
