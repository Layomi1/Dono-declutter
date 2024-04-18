import { useContext } from "react";
import styles from "./CartItem";
import { ProductsContext } from "../../Context/ProductContext";

const CartItem = () => {
  const [products, cartItems, removeFromCart] = useContext(ProductsContext);

  return (
    <div className={styles["cart-item"]}>
      <div>
        {products.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div>
                <input type="checkbox" />
                <div className={styles.card}>
                  <img
                    key={e.id}
                    src={e.thumbnail}
                    alt={e.title}
                    className={styles["card-image"]}
                  />
                  <p>{e.title}</p>
                  <p>{e.price}</p>
                  <a
                    onClick={() => {
                      removeFromCart(e.id);
                    }}
                  >
                    Remove
                  </a>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default CartItem;
