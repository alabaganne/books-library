import { createBrowserRouter } from "react-router-dom";
import App from './App';
import About from "./pages/About";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import AddBook from "./pages/Books/Add";
import Books from "./pages/Books/Index";
import Contact from './pages/Contact'
import Home from './pages/Home';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: '',
				element: <Home />
			},
			{
				path: 'about/',
				element: <About />
			},
			{
				path: 'contact/',
				element: <Contact />
			},
			{
				path: 'books/',
				element: <Books />
			},
			{
				path: 'books/add',
				element: <AddBook />
			}
	  	],
	},
	{
		path: '/login',
		element: <Login />
	},
	{
		path: '/register',
		element: <Register />
	}
]);

export default router;