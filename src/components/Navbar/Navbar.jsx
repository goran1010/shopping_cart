import { Link, Outlet } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav>
      <Link className={styles.link} to="/home">
        Home Page
      </Link>
      <Link className={styles.link} to="/shop">
        Shop Page
      </Link>
      <Link className={styles.link} to="/contact">
        Contact Page
      </Link>
    </nav>
  );
}
export default Navbar;
