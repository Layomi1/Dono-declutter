import styles from "./Cart.module.css";
import CartItem from "../../components/CartItem/CartItem";
import { useContext } from "react";
import { ProductsContext } from "../../Context/ProductContext";

const AddToCart = () => {
  const cart = useContext(ProductsContext);

  return (
    <div className={styles.cart}>
      <h3 className={styles.title}>Cart</h3>
      {/* {cartItems.length > 0
        ? cartItems.map((item) => <CartItem key={item.id} item={item} />)
        : ""} */}
    </div>
  );
};

export default AddToCart;
