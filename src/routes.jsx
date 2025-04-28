import { Navigate } from "react-router-dom";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home/Home";
import Shop from "./components/Shop";
import Shopping from "./components/Shopping";
import MyCart from "./components/MyCart";

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
    children: [
      { index: true, element: <Shopping /> },
      { path: "/shop/shopping", element: <Shopping /> },
      { path: "/shop/my-cart", element: <MyCart /> },
    ],
  },
  { path: "/contact", element: <Contact /> },
  { path: "*", element: <ErrorPage /> },
];

export default routes;
