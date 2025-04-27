import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    let title = "My App";

    switch (location.pathname) {
      case "/home":
        title = "Home Page";
        break;
      case "/shop":
        title = "Shop Page";
        break;
      case "/contact":
        title = "Contact Page";
        break;
      default:
        title = "Shopping App";
        break;
    }

    document.title = title;
  }, [location]);

  return null;
};

export default PageTitle;
