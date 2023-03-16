import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button';
import Container from '../../components/Container';
import { book } from '../../fakeData';

export default function ShowBook({ params }: any) {
  const { id } = useParams();

  return (
    <Container>
      <div>
        <div>
          <img src={book.imageUrl} className="mx-auto" alt={book.title} />
          <div className="mt-6 grid grid-cols-4 gap-6">
            {Array.from({ length: 4 }, (_, i) => (
              <div className="rounded-lg border p-4 hover:cursor-pointer hover:bg-gray-50">
                <img src={book.imageUrl} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <h2>{book.title}</h2>
          <p className="mt-4 text-gray-500">{book.description}</p>
          <div className="mt-8 flex gap-4">
            <Button>
              <FiShoppingCart className="h-5 w-5" />
              Add to Cart
            </Button>
            <Button type="outline-black">
              <FiHeart className="h-5 w-5" />
              Add to Favorites
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
