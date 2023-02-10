import { Outlet } from 'react-router';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
