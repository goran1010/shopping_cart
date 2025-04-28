import { useOutletContext } from "react-router-dom";

function Shopping() {
  const { status, allItems, changePurchases, addToCart } = useOutletContext();
  if (status === "loading") return <div>loading...</div>;
  if (status === "fail") return <div>failed...</div>;
  return (
    <div className="shopping">
      {allItems.map((item) => {
        return (
          <div className="card" key={item.id}>
            <img src={item.image} alt="" />

            <div className="text-content">
              <p>{item.title}</p>
              <input
                type="number"
                name="purchases"
                id="purchases"
                data-id={item.id}
                min={0}
                max={10}
                value={item.purchases}
                onChange={changePurchases}
              />
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
