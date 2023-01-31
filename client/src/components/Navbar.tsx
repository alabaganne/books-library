import React from "react";
import { Link } from "react-router-dom";

const styles = {
	link: 'text-gray-500 hover:text-gray-700'
}

const Navbar: React.FC = () => {
	return (
		<nav className="p-4 bg-white shadow-sm flex items-center justify-between">
			<div className="flex items-center">
				<div className="font-bold text-2xl">LOGO</div>
				<div className="ml-8 flex gap-4">
					<Link to={'/'} className={styles.link}>Home</Link>
					<Link to={'/contact'} className={styles.link}>Contact</Link>
				</div>
			</div>
			<div className="flex gap-4">
				<Link to={'/login'} className={styles.link}>Log in</Link>
				<Link to={'/register'} className={styles.link}>Register</Link>
			</div>
		</nav>
	);
}

export default Navbar;