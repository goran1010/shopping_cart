import { Link } from "react-router-dom";

function ShoppingNavbar() {
  return (
    <nav>
      <Link to="/shop/shopping">Visit Shop</Link>
      <Link to="/shop/my-cart">My Cart</Link>
    </nav>
  );
}
export default ShoppingNavbar;
