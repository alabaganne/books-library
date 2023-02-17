import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import image4 from '../../assets/4.jpg';
import image5 from '../../assets/5.jpg';
import image6 from '../../assets/6.jpg';
import image7 from '../../assets/7.jpg';

const data = [
  { label: 'Books', title: 'Weird books', imageUrl: image7 },
  { label: 'Books', title: '50 essential travel books', imageUrl: image4 },
  { label: 'Books', title: 'The most devilish books', imageUrl: image5 },
  { label: 'Books', title: '30 essential self help books', imageUrl: image6 },
  { label: 'Books', title: '60 books about World War II', imageUrl: image7 },
  { label: 'Books', title: '50 essential travel books', imageUrl: image4 },
];

export default function ExploreMore() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-5 mr-16 flex items-center">
        <div>
          <h2>More To Explore</h2>
          <p className="mt-4 text-lg text-gray-600">
            Above Books regulary publishes fascinating features about a huge
            variety of bookish subjects, publishers, and interesting characters
            in litertature and notable anniversaries
          </p>
          <button className="btn-common btn-lg btn-primary mt-6">
            See All Features <FiArrowRight />
          </button>
        </div>
      </div>
      <div className="col-span-7 grid grid-cols-3 gap-6">
        {data.map((card) => (
          <Link
            to="/"
            className="scale-on-hover col-span-1 overflow-hidden rounded-lg bg-white shadow-md"
          >
            <img
              src={card.imageUrl}
              alt={card.title}
              className="max-h-48 w-full object-cover"
            />
            <div className="p-6 font-semibold">
              <div className="text-sm uppercase text-red-500">{card.label}</div>
              <h4 className="mt-2 text-lg">{card.title}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
