import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from 'Pages/Root';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './Pages/ErrorPage';
import Sets from './Pages/Sets/index';
import Decks from './Pages/Decks/index';
import Cards from './Pages/Cards/index';
import initialize from './initializer';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

initialize();

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "sets",
        element: <Sets />,
      },
      {
        path: "decks",
        element: <Decks />,
      },
      {
        path: "cards",
        element: <Cards />,
      },
    ]
  },
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
