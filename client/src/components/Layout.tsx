import Navbar from "./Navbar";

interface Props {
	children: React.ReactNode;
}

export default function Layout(props: Props) {
	return (
		<div className="min-h-screen" style={{backgroundColor: '#DCD9D3'}}>
			<div className="container mx-auto">
				<Navbar />
				<div className="p-6">
					{props.children}
				</div>
			</div>
		</div>
	)
}