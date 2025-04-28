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
    }
    document.title = title;
  }, [location, isErrorPage]);

  return null;
};

export default PageTitle;
