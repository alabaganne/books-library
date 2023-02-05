import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="flex-1  text-white p-12 text-center flex-center header-img bg-cover bg-center">
			<div className="flex items-center flex-col w-full">
				<h1 className="font-black text-6xl uppercase">To succeed <br />you must <br />read</h1>
				<p className="mt-6 text-sm font-medium"><span className="underline font-bold">Not sure what to read?</span> <span className="opacity-75">Explore our catalog of <br /> public domain books with our editors.</span></p>
				<div className="mt-8">
					<Link to="books" className="btn-xl btn-white flex items-center gap-4">
						<span>Explore books</span>
						<span>|</span>
						<ArrowUpRightIcon className="h-4 w-4" />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Home;