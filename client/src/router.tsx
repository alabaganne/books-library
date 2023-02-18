import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Home from './pages/Home/Index';
import Books from './pages/Books/Index';
import ShowBook from './pages/Books/Show';
import AddBook from './pages/Books/Add';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/register', element: <Register /> },
      { path: '/login', element: <Login /> },
      { path: '/admin', element: <AdminDashboard /> },
      { path: '/contact', element: <Contact /> },
      { path: '/about', element: <About /> },
      { path: '/wishlist', element: <Wishlist /> },
      { path: '/cart', element: <Cart /> },
      { path: '/books', element: <Books /> },
      { path: '/books/add', element: <AddBook /> },
      { path: '/books/:id/', element: <ShowBook /> },
    ],
  },
]);

export default router;
