import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const PageTitle = ({ isErrorPage = false }) => {
  const location = useLocation();

  useEffect(() => {
    let title = "My App";

    if (isErrorPage) {
      title = "Error Page";
    } else {
      switch (location.pathname) {
        case "/home":
          title = "Home Page - Shopify";
          break;
        case "/shop":
          title = "Shop Page - Shopify";
          break;
        case "/contact":
          title = "Contact Page - Shopify";
          break;
        case "/shop/shopping":
          title = "Shopping Page - Shopify";
          break;
        case "/shop/my-cart":
          title = "My Cart - Shopify";
          break;
        default:
          title = "Shopping App - Shopify";
          break;
      }
    }
    document.title = title;
  }, [location, isErrorPage]);

  return null;
};

export default PageTitle;
