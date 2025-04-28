import { useOutletContext } from "react-router-dom";

function MyCart() {
  const { myCart, changeMyCart } = useOutletContext();
  let totalPayment = myCart.reduce(
    (sum, item) => item.price * item.purchases + sum,
    0
  );
  return (
    <div className="my-cart">
      {myCart.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} alt="" />
            <p>{item.title}</p> <p>Number of items: {item.purchases}</p>{" "}
            <p>Price per item: {item.price}$</p>
            <p>
              Total price for all purchases of this item:{" "}
              {item.price * item.purchases}${" "}
            </p>
          </div>
        );
      })}
      <p>Cart total payment required: {totalPayment}$</p>
      <button onClick={changeMyCart}>Buy all items from cart</button>
    </div>
  );
}

export default MyCart;
