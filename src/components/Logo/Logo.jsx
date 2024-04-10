import logo from "../../assets/logo.svg";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt="logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;
