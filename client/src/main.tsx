import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';

// todo: Contact book sellers in tunisia and offer to sell their books
// todo: reate a software that updates our DB product quantity when the seller sells something in real-time and run and ask the seller to keep it running
// todo: surround RouterProvider with App component

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
