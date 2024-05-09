import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Search from './components/Search';
import RecipeDescription from './components/Description';

const router = createBrowserRouter([
  {
    path: '/SpiceSafari-Recipe-App',
    element: <App />,
  },
  {
    path: '/search',
    element: <Search />,
  },
  {
    path: '/description/:id',
    element: <RecipeDescription />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <RouterProvider router={router} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
