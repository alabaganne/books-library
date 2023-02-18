import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

export default function Pagination() {
  return (
    <div className="flex divide-x overflow-hidden rounded-lg border border-gray-300 text-center text-sm font-medium text-gray-700">
      {/* todo: add disabled styles for prev button for when the user is in the 1st page */}
      <button className="flex-center px-5 py-3 hover:bg-gray-100">
        <FiArrowLeft className="mr-1 text-gray-400" /> Prev
      </button>
      <button className="flex-center px-5 py-3 hover:bg-gray-100">1</button>
      {/* current page styles */}
      <button className="flex-center cursor-default bg-gray-800 px-5 py-3 text-white">
        2
      </button>
      <button className="flex-center px-5 py-3 hover:bg-gray-100">3</button>
      <button className="flex-center px-5 py-3 hover:bg-gray-100">4</button>
      <button className="flex-center px-5 py-3 hover:bg-gray-100">5</button>
      <button className="flex-center px-5 py-3 hover:bg-gray-100">1</button>
      <button className="flex-center px-5 py-3 hover:bg-gray-100">
        Next <FiArrowRight className="ml-1 text-gray-400" />
      </button>
      {/* todo: add disabled styles for next button for when the user is in the last page */}
    </div>
  );
}
