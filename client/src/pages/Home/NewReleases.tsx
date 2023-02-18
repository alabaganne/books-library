import { Link } from 'react-router-dom';
import BookCard from '../../components/BookCard';
import BooksList from '../../components/BooksList';
import { books5 } from '../../fakeData';

export default function NewReleases() {
  return (
    <div>
      <div className="flex-between">
        <h2>New Releases</h2>
        <Link to="/books" className="btn-common btn-lg btn-primary">
          See All Books -&gt;
        </Link>
      </div>
      <div className="mt-8">
        <BooksList books={books5} />
      </div>
    </div>
  );
}
