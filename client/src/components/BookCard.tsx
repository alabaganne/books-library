import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import Book from '../interfaces/book';
import image from '../assets/Shadowlands.jpg';
import { Link } from 'react-router-dom';

interface Props {
  book: Book;
}

export default function BookCard(props: Props) {
  function like() {
    console.log('book liked:', props.book.id);
  }

  function addToCart() {
    console.log('book added to card:', props.book.id);
  }

  return (
    <Link
      to={'/books/' + props.book.id}
      className="scale-on-hover rounded p-6 hover:shadow-lg"
    >
      <div>
        <img src={image} alt={props.book.title} className="mx-auto w-4/5" />
      </div>
      <div className="mt-2 font-bold">{props.book.title}</div>
      <hr className="my-2" />
      <div className="flex-between text-xs font-semibold text-gray-400">
        <div>Author</div>
        <div>{props.book.authorName}</div>
      </div>
      <div className="flex-between mt-4 text-sm">
        <div className="font-bold">
          <span>{props.book.price} TND</span>
          <span className="ml-1 text-xs text-red-500 line-through">
            {props.book.priceOld} TND
          </span>
        </div>
        <div>
          <div className="rounded bg-red-500 p-1 text-xs text-white">-10%</div>
        </div>
      </div>
      <div className="flex-between mt-4">
        <button
          onClick={addToCart}
          className="btn-common btn-sm btn-outline-black"
        >
          <FiShoppingCart className="mr-1 h-5 w-5" />
          <span>Add to Cart</span>
        </button>
        <button
          onClick={like}
          className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-black"
        >
          <FiHeart className="h-5 w-5" />
        </button>
      </div>
    </Link>
  );
}
