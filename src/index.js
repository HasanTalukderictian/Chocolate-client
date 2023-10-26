import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddItem from './componenets/AddItem/AddItem';
import Update from './componenets/UpdateItem/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    loader:()=> fetch('http://localhost:4000/chocolate')
  },
  {
    path:'/AddItem',
    element:<AddItem></AddItem>
  },
  {
    path:'/updateItem/:id',
    element:<Update></Update>,
    loader:({params}) => fetch(`http://localhost:4000/chocolate/${params.id}`)
  }
]);

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
