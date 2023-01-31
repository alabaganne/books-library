import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />
      <div className='p-6'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
