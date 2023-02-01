import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

function Home() {
	return (
		<div className="grid grid-cols-2 py-12">
			<div className="col-span-1">
				<h1 className="text-6xl font-black uppercase">To succeed you must read</h1>
				<p className="mt-4 text-gray-600"><span className="font-bold text-black">Not sure what to read next?</span> Explore our catalog of public domain books with our editors.</p>
				<button className="mt-8 flex items-center justify-between gap-2 px-6 py-4 bg-black text-white hover:bg-transparent hover:text-black border-2 border-transparent hover:border-black">
					<span className="font-bold">Explore Now</span>
					<span>|</span>
					<ArrowUpRightIcon className="h-4 w-4" />
				</button>
			</div>
			<div className="col-span-1"></div>
		</div>
	);
}

export default Home;