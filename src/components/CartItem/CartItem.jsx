import { useContext } from "react";
import styles from "./CartItem.module.css";
import { ProductsContext } from "../../Context/ProductContext";
import CustomButton from "../CustomButton/CustomButton";
import { useProducts } from "../../Context/ProductContext";

const CartItem = ({ item }) => {
  const { products, cartItems, removeFromCart, getTotalCartValue } =
    useContext(ProductsContext);
  console.log(item);
  console.log(cartItems);

  const product = useProducts(item);

  return (
    <div className={styles.cart}>
      <div className={styles["cart-item"]}>
        <div className={styles.input}>
          <label htmlFor="checkbox"></label>
          <input type="checkbox" />
        </div>

        <div className={styles.card}>
          <div>
            <div>
              <img
                src={product.thubmail}
                alt={product.index}
                className={styles["card-img"]}
              />
              <p>{getTotalCartValue()}</p>
              {/* <p> &#8358;{product.price}</p> */}
              <a
                onClick={() => {
                  removeFromCart(product.id);
                }}
              >
                Remove item
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.all}>
        <div className={styles.input}>
          <label htmlFor="checkbox"></label>
          <input type="checkbox" />
        </div>

        <div className={styles.payment}>
          <p>All</p>
          <div className={styles["payment-inner"]}>
            <h3> Total Price: &#8358;{0}</h3>
            <CustomButton
              text="Check Out"
              type="orange"
              buttonStyle={styles["small-btn"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
