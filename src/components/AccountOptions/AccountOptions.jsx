import { Link } from "react-router-dom";
import ad_icon from "../../assets/ad_icon.png";
import user_icon from "../../assets/user_icon.png";
import order_icon from "../../assets/order_icon.png";
import recently_viewed_icon from "../../assets/recently_viewed_icon.png";
import payment_icon from "../../assets/payment_icon.png";
import styles from "./AccountOptions.module.css";

const AccountOptions = () => {
  return (
    <div className={styles["account-left"]}>
      <ul>
        <li>
          <Link to="/account">
            <img src={user_icon} alt="user icon" />
            <small>Profile</small>
          </Link>
        </li>

        <li>
          <Link to="/order">
            <img src={order_icon} alt="order icon" />
            <small>Orders</small>
          </Link>
        </li>

        <li>
          <Link to="/recent">
            <img src={recently_viewed_icon} alt="recently viewed icon" />
            <small>Recently Viewed</small>
          </Link>
        </li>

        <li>
          <Link to="/pay">
            <img src={payment_icon} alt="payment icon" />
            <small>Payment Cards</small>
          </Link>
        </li>

        <li>
          <Link to="/advert">
            <img src={ad_icon} alt="ad icon" />
            <small>My Adverts</small>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AccountOptions;
