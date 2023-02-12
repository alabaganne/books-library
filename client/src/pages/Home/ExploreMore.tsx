import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function ExploreMore() {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-1">
        <h2>More To Explore</h2>
        <p className="mt-4 text-gray-600">
          Above Books regulary publishes fascinating features about a huge
          variety of bookish subjects, publishers, and interesting characters in
          litertature and notable anniversaries
        </p>
        <button className="btn btn-lg btn-primary mt-6">
          See All Features <FiArrowRight />
        </button>
      </div>
      <div className="col-span-2"></div>
    </div>
  );
}
