import ProductList from "../../components/ProductList/ProductList";
import styles from "./Landing.module.css";
import Hero from "../../components/Hero/Hero";

const Landing = () => {
  return (
    <div className={styles.landing}>
      <Hero />
      <ProductList />
    </div>
  );
};

export default Landing;
