import { useOutletContext } from "react-router-dom";
import styles from "./Shopping.module.css";

function Shopping() {
  const { status, allItems, changePurchases, addToCart } = useOutletContext();
  if (status === "loading") return <div>loading...</div>;
  if (status === "fail") return <div>failed...</div>;
  return (
    <div className={styles.shopping}>
      {allItems.map((item) => {
        return (
          <div className={styles.card} key={item.id}>
            <img src={item.image} alt="" />

            <div className={styles.text}>
              <p>{item.title}</p>
              <div>
                <p>{item.price}$</p>
                <input
                  type="number"
                  name="purchases"
                  id="purchases"
                  data-id={item.id}
                  min={1}
                  max={10}
                  value={item.purchases}
                  onChange={changePurchases}
                />
              </div>
            </div>
            <button data-id={item.id} onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Shopping;
