import Book from '../interfaces/book';
import BookCard from './BookCard';

interface Props {
  books: Array<Book>;
}

export default function BooksList({ books }: Props) {
  return (
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-5">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
}
