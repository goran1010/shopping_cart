import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import PageTitle from "./PageTitle";
import ShoppingNavbar from "./ShoppingNavbar/ShoppingNavbar";
import { useEffect, useState } from "react";

function Shop() {
  const [status, setStatus] = useState("loading");
  const [allItems, setAllItems] = useState([]);
  const [myCart, setMyCart] = useState([]);

  function getAllItems(data) {
    const newItems = data.map((item) => {
      return { ...item, purchases: 1 };
    });
    setAllItems(newItems);
  }

  function changePurchases(e) {
    const newItems = allItems.map((item) => {
      if (item.id === +e.target.getAttribute("data-id")) {
        item.purchases = e.target.value;
        return item;
      }
      item.purchases = 1;
      return item;
    });
    setAllItems(newItems);
  }

  function addToCart(e) {
    let newItem = allItems.find(
      (item) => item.id === +e.target.getAttribute("data-id")
    );
    if (newItem.purchases === 0) return;
    if (myCart.find((item) => item.id === newItem.id)) {
      const newCart = myCart.map((item) => {
        if (item.id === newItem.id) {
          item.purchases = +item.purchases + +newItem.purchases;
        }
        return item;
      });
      setMyCart(newCart);
      const newItems = allItems.map((item) => {
        return { ...item, purchases: 1 };
      });
      setAllItems(newItems);
      return;
    }
    setMyCart([...myCart, newItem]);
    const newItems = allItems.map((item) => {
      return { ...item, purchases: 1 };
    });
    setAllItems(newItems);
  }

  function changeMyCart() {
    setMyCart([]);
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        getAllItems(data);
        setStatus("success");
      })
      .catch((error) => {
        console.error(error);
        setStatus("failed");
      });
  }, []);
  return (
    <>
      <PageTitle />
      <Navbar />
      <ShoppingNavbar />
      <Outlet
        context={{
          status,
          allItems,
          changePurchases,
          addToCart,
          myCart,
          changeMyCart,
        }}
      />
    </>
  );
}
export default Shop;
