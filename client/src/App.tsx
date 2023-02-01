import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <div>
      <Layout children={(<Outlet />)}/>
    </div>
  );
}

export default App;
