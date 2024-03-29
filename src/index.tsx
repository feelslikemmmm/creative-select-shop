import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from '@pages/NotFound';
import Home from '@pages/Home';
import AllProducts from '@pages/AllProducts';
import NewProduct from '@pages/NewProduct';
import ProductDetail from '@pages/ProductDetail';
import MyCart from '@pages/MyCart';
import ProtectedRoute from '@pages/ProtectedRoute';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <NotFound />,
      children: [
        { index: true, path: '/', element: <Home /> },
        { path: '/products', element: <AllProducts /> },
        {
          path: '/products/new',
          element: (
            <ProtectedRoute requireAdmin>
              <NewProduct />
            </ProtectedRoute>
          ),
        },
        { path: '/products/:id', element: <ProductDetail /> },
        {
          path: '/cart',
          element: (
            <ProtectedRoute>
              <MyCart />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ],
  { basename: process.env.PUBLIC_URL }
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
