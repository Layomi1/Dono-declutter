import AccountOptions from "../../components/AccountOptions/AccountOptions";
import Item from "../../components/Item/Item";
import styles from "./Recent.module.css";

const Recent = () => {
  return (
    <section className={styles.recent}>
      <p>Recently Viewed</p>

      <main>
        <AccountOptions />
        <div className={styles.display}></div>
        <Item />
      </main>
    </section>
  );
};

export default Recent;
