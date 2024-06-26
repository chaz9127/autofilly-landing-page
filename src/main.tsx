import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './Pages/LandingPage/LandingPage.tsx';
import Test from './Pages/Test/Test.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Feedback from './Pages/Feedback/Feedback.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
    // create error page
  },
  {
    path: "/test",
    element: <Test />,
    // create error page
  },
  {
    path: "/feedback",
    element: <Feedback />,
    // create error page
  },
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
