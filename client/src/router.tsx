import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Contact from './pages/Contact'
import Home from './pages/Home';

const router = createBrowserRouter([
	{
	  path: "/",
	  element: <App />,
	  children: [
		{
			path: '/',
			element: <Home />
		},
		{
			path: "/contact",
			element: <Contact />
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