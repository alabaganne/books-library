import { books5 } from '../fakeData';
import BooksList from '../components/BooksList';

export default function Wishlist() {
  return (
    <div className=" flex flex-col gap-24 pt-16 pb-16 pl-16 pr-16">
      <BooksList books={books5} />
      <BooksList books={books5} />
      <BooksList books={books5} />
    </div>
  );
}
