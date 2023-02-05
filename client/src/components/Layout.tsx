import { CodeBracketSquareIcon } from "@heroicons/react/24/solid";
import Navbar from "./Navbar";

function Footer() {
	return (
		<footer className="pb-6 px-6">
			<div className="flex items-center justify-center">
				<CodeBracketSquareIcon className="h-5 w-5 mr-1" />
				<p className="text-xs text-gray-700">This website is designed and developped by <a href="https://www.linkedin.com/in/alabaganne/" className="font-medium text-black hover:underline">Ala Baganne</a></p>
			</div>
		</footer>
	);
}

interface Props {
	children: React.ReactNode;
}

export default function Layout(props: Props) {
	return (
		<div className="min-h-screen flex flex-col" style={{backgroundColor: '#DCD9D3'}}>
			<Navbar />
			<div className="p-6 flex-1 flex">
				{props.children}
			</div>
			<Footer />
		</div>
	);
}