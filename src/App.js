import React from 'react';
import './App.css';
import Home from './pages/Home';
import Login from './features/auth/components/Login';
import Signup from './features/auth/components/Signup';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Cart } from './features/cart/Cart';
import Checkout from './pages/Checkout';
import ProductDetails from './features/product-list/components/ProductDetails';

  const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/> ,
  },
  {
    path: "login",
    element: <Login/>,
  },,
  {
    path: "signup",
    element: <Signup/>,
  },
  {
    path: "cart",
    element: <Cart/>,
  },
  {
    path: "checkout",
    element: <Checkout/>,
  },
  {
    path: "detail",
    element:<ProductDetails/>,
  },
  ]);

function App() {
  return (
    <div className="App">  
      <RouterProvider router={router} />
    </div>
  );
}

export default App;