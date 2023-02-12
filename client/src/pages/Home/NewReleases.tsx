import { Link } from 'react-router-dom';
import BookCard from '../../components/BookCard';
import Book from '../../interfaces/book';

const book: Book = {
  id: 1,
  title: 'Shadowlands: A Journey Through Lost Britain',
  authorId: 1,
  authorName: 'Matthew Green',
  price: 450.43,
  priceOld: 550.21,
};

const books: Array<Book> = [book, book, book, book, book];

export default function NewReleases() {
  return (
    <div>
      <div className="flex-between">
        <h2>New Releases</h2>
        <Link to="/books" className="btn-common btn-lg btn-primary">
          See All Books -&gt;
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-5 gap-6">
        {books &&
          books.map((book, index) => <BookCard key={index} book={book} />)}
      </div>
    </div>
  );
}
