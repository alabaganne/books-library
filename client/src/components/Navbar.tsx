import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlassIcon, Bars3Icon, HomeIcon, BookOpenIcon, HashtagIcon, UsersIcon, CursorArrowRaysIcon } from "@heroicons/react/24/solid";

interface NavLink {
	name: string;
	href: string;
	classes?: string,
	current: boolean;
	icon: React.ReactNode;
}

const navItems: Array<NavLink> = [
	{ name: 'Home', href: '/', current: true, icon: (<HomeIcon className="h-6 w-6" />) },
	{ name: 'About Us', href: 'about', current: false, icon: (<UsersIcon className="h-6 w-6" />) },
	{ name: 'Books', href: 'books', current: false, icon: (<BookOpenIcon className="h-6 w-6" />) },
	{ name: 'Categories', href: '#', current: false, icon: (<HashtagIcon className="h-6 w-6" />) },
	{ name: 'Create Account', href: '/register', classes: 'md:hidden', current: false, icon: (<CursorArrowRaysIcon className="h-6 w-6" />) }
]

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const navItemsDesktop = navItems.map(item => 
		<Link to={item.href} className={'text-sm text-gray-700 hover:text-black font-medium ' + (item.classes || '')}>{item.name}</Link>
	);

	const navItemsMobile = navItems.map(item =>
		<Link to={item.href} className={'flex px-6 py-4 font-medium text-black hover:text-white hover:bg-black border-t border-gray-400 ' + item.classes}>
			<span className="mr-4">{item.icon}</span> {item.name}
		</Link>
	);

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
						{navItemsDesktop}
					</div>
				</div>
				<div className="flex items-center gap-4">
					{/* search input */}
					<form className="flex bg-transparent">
						<button type="submit">
							<MagnifyingGlassIcon className="h-6 w-6 text-black" />
						</button>
						<input type="text" placeholder="Search books here..." className="text-sm border-none outline-none placeholder-gray-500 font-medium bg-transparent p-3 focus:placeholder-transparent" />
					</form>
					{/* create account button */}
					<Link to={'/register'} className="btn-lg btn-outline-black hidden md:block">Create Account</Link>
				</div>
			</div>
			{isOpen && <div className="lg:hidden">
				{navItemsMobile}
			</div>}
		</nav>
	);
}

export default Navbar;