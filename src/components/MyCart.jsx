import { useOutletContext } from "react-router-dom";

function MyCart() {
  const { myCart, changeMyCart } = useOutletContext();
  return (
    <div className="my-cart">
      {myCart.map((item) => {
        return (
          <div key={item.id}>
            {item.title} {item.purchases}
          </div>
        );
      })}
      <button onClick={changeMyCart}>Buy all items from cart</button>
    </div>
  );
}

export default MyCart;
