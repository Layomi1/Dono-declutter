import styles from "./Item.module.css";
import { Link } from "react-router-dom";

const Item = ({ thumbnail, title, price, id }) => {
  return (
    <div className={styles.item}>
      <img src={thumbnail} alt="" />

      <div className={styles.details}>
        <div className={styles.text}>
          <p>{title}</p>
          <p>&#8358;{price}</p>
        </div>

        <div className={styles["view-link"]}>
          <Link to={`products/${id}`}>View</Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
