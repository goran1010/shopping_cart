import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import PageTitle from "./PageTitle";
import ShoppingNavbar from "./ShoppingNavbar";

function Shop() {
  return (
    <>
      <PageTitle />
      <Navbar />
      <ShoppingNavbar />
      <Outlet />
    </>
  );
}
export default Shop;
