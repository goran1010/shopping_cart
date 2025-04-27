import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/home">Home Page</Link>
      <Link to="/shop">Shop Page</Link>
      <Link to="/contact">Contact Page</Link>
    </nav>
  );
}
export default Navbar;
