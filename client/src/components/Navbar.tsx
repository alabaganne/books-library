import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Link {
	name: string;
	href: string;
	current: boolean;
}

const navigation: Array<Link> = [
	{ name: 'Home', href: '#', current: true },
	{ name: 'About Us', href: '#', current: false },
	{ name: 'Books', href: '#', current: false },
	{ name: 'Categories', href: '#', current: false },
]

function NavLink(props: Link) {
	return (
		<Link to={props.name} className="text-sm font-medium text-gray-700 hover:text-gray-500">{ props.name }</Link>
	)
}

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="mx-6 border-b border-gray-400">
			<div className="py-6 flex items-center justify-between">
				<div className="flex items-center">
					<button onClick={() => setIsOpen(!isOpen)}
						className="lg:hidden mr-8 text-sm"
					>TOGGLE</button>
					<div className="font-black text-3xl">LOGO.</div>
					<div className="ml-10 hidden lg:flex gap-8">
						{navigation.map(item => {
							return (<NavLink name={item.name} href={item.href} current={item.current} />);
						})}
					</div>
				</div>
				<div className="flex items-center gap-4">
					{/* search input */}
					<form className="flex bg-white px-4 py-3 border-2 border-white shadow">
						<input type="text" placeholder="Search books here..." className="text-sm border-none outline-none placeholder-gray-500 font-medium" />
						<button type="submit">
							{/* search icon */}
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
								<path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
							</svg>
						</button>
					</form>
					{/* create account button */}
					<Link to={'/register'} className="px-5 py-3 border-2 border-black font-medium text-sm hover:bg-black hover:text-white">Create Account</Link>
				</div>
			</div>
			{isOpen && <div className="lg:hidden">
				{navigation.map(item => {
					return (<div>
						<Link to={item.href} className="block px-6 py-4 font-medium text-black hover:text-white hover:bg-black border-t border-gray-400">
							{item.name}
						</Link>
					</div>)
				})}
			</div>}
		</nav>
	);
}

export default Navbar;