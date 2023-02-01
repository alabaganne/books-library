import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlassIcon, Bars3Icon, ArrowUpRightIcon, HomeIcon, BookOpenIcon, HashtagIcon, UsersIcon } from "@heroicons/react/24/solid";

interface NavLink {
	name: string;
	href: string;
	current: boolean;
	icon: React.ReactNode;
}

const navigation: Array<NavLink> = [
	{ name: 'Home', href: '#', current: true, icon: (<HomeIcon className="h-6 w-6" />) },
	{ name: 'About Us', href: '#', current: false, icon: (<UsersIcon className="h-6 w-6" />) },
	{ name: 'Books', href: '#', current: false, icon: (<BookOpenIcon className="h-6 w-6" />) },
	{ name: 'Categories', href: '#', current: false, icon: (<HashtagIcon className="h-6 w-6" />) },
]

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {

	}, []);

	return (
		<nav className="mx-6 border-b border-gray-400">
			<div className="py-6 flex items-center justify-between">
				<div className="flex items-center">
					<button onClick={() => setIsOpen(!isOpen)}
						className="lg:hidden mr-6 text-gray-500 hover:text-black"
					>
						<Bars3Icon className="h-7 w-7" />
					</button>
					<div className="font-black text-3xl">LOGO.</div>
					<div className="ml-10 hidden lg:flex gap-8">
						{navigation.map(item => {
							return (<Link to={item.href}
								className="text-sm text-gray-700 hover:text-black font-medium"
							>{item.name}</Link>);
						})}
					</div>
				</div>
				<div className="flex items-center gap-4">
					{/* search input */}
					<form className="flex bg-transparent px-4 py-3">
						<button type="submit" className="mr-4">
							<MagnifyingGlassIcon className="h-6 w-6 text-black" />
						</button>
						<input type="text" placeholder="Search books here..." className="text-sm border-none outline-none placeholder-gray-500 font-medium bg-transparent" />
					</form>
					{/* create account button */}
					<Link to={'/register'} className="px-5 py-3 border-2 border-black font-medium text-sm hover:bg-black hover:text-white">Create Account</Link>
				</div>
			</div>
			{isOpen && <div className="lg:hidden">
				{navigation.map(item => {
					return (<div>
						<Link to={item.href} className="flex px-6 py-4 font-medium text-black hover:text-white hover:bg-black border-t border-gray-400">
							<span className="mr-4">{item.icon}</span> {item.name}
						</Link>
					</div>)
				})}
			</div>}
		</nav>
	);
}

export default Navbar;