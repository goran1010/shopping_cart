import { Link } from "react-router-dom";
import styles from "./ShoppingNavbar.module.css";

function ShoppingNavbar() {
  return (
    <nav className={styles.nav}>
      <Link className={styles.link} to="/shop/shopping">
        Visit Shop
      </Link>
      <Link className={styles.link} to="/shop/my-cart">
        My Cart
      </Link>
    </nav>
  );
}
export default ShoppingNavbar;
