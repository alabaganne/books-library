import { Link } from 'react-router-dom';
import readingImage from '../../assets/reading-home-about-us.jpg';

export default function AboutUs() {
  return (
    <div className="grid grid-cols-2 gap-16">
      <div className="flex items-center">
        <div>
          <h2>For The Love Of Reading</h2>
          <div className="mt-6 flex flex-col gap-6">
            <div>
              <div className="text-lg font-semibold">Selection</div>
              <p className="mt-1">
                We have more than 13 million titles to choose from, from the
                earliest board books to the all-time classics of literature.
              </p>
            </div>
            <div>
              <div className="text-lg font-semibold">Purchasing Power</div>
              <p className="mt-1">
                Used books are often treasures that are out-of-print or rare.
                With Wish Lists you can choose to be notified the instant we
                find a copy, see how often we find rare titles, and see who else
                is interested.
              </p>
            </div>
            <div>
              <div className="text-lg font-semibold">Free Shipping & More</div>
              <p className="mt-1">
                When you've found the books you want we'll ship qualifying
                orders to your door for FREE in 100% recyclable packaging. If
                there is no demand for a book, we will donate it to charity, or
                we'll recycle it.
              </p>
            </div>
            <div>
              <button className="btn btn-lg btn-primary">More About Us</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={readingImage} alt="A person reading a book with a coffee" />
      </div>
    </div>
  );
}
