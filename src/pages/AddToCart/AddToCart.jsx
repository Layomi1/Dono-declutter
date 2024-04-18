import styles from "./AddToCart.module.css";
import CartItem from "../../components/CartItem/CartItem";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useContext } from "react";
import { ProductsContext } from "../../Context/ProductContext";

const AddToCart = () => {
  const [product, cartItems] = useContext(ProductsContext);

  return (
    <div className={styles.cart}>
      <p>Cart</p>
      <CartItem />
      <div className="all">
        <input type="checkbox" />
        <label htmlFor="checkbox">All</label>
        <div>
          <h3> Total Price: &#8358;{product.id * cartItems[product.id]}</h3>
          <CustomButton text="Check Out" type="orange" className="small-btn" />
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
