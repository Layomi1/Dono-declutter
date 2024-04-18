import styles from "./Account.module.css";
import CustomButton from "../../components/CustomButton/CustomButton";
import person from "../../assets/person.png";
import AccountOptions from "../../components/AccountOptions/AccountOptions";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div className={styles.account}>
      <h2 className={styles.header}>Account Overview</h2>
      <div className={styles.content}>
        <AccountOptions />

        <div className={styles["account-middle"]}>
          <input type="image" src={person} alt="woman" />

          {/* <div className={styles.password}>
            <label htmlFor="password">Password</label>
            <input type="password" />
          </div> */}
        </div>

        <div className={styles["account-right"]}>
          <div className={styles["account-right-top"]}>
            <h2>Account Details</h2>

            <h3>Esther Iremitide Olowoniyi</h3>

            <div className={styles.group}>
              <h4>Esther Iremitide Olowoniyi</h4>
              <h4>Parakin, Ile Ife</h4>
              <h4>Ile ife, Osun</h4>
              <h4>+234 7065056725</h4>
            </div>
            <h4>Estherolowoniyi@gmail.com</h4>
          </div>

          <h3>EDIT PROFILE</h3>
        </div>
      </div>
      <div className={styles.submit}>
        <Link to="/">
          <CustomButton
            buttonStyle={styles["big-btn"]}
            type="orange"
            text="LOG OUT"
          />
        </Link>
      </div>
    </div>
  );
};

export default Account;
