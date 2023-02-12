import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import AdminDashboard from './pages/Admin/Dashboard';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Books from './pages/Books/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Home from './pages/Home/Index';

const router = createBrowserRouter([
  { path: '/register', element: <Register /> },
  { path: '/login', element: <Login /> },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/admin', element: <AdminDashboard /> },
      { path: '/contact', element: <Contact /> },
      { path: '/about', element: <About /> },
      { path: '/wishlist', element: <Wishlist /> },
      { path: '/cart', element: <Cart /> },
      { path: '/books', element: <Books /> },
    ],
  },
]);

export default router;
