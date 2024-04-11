import { useEffect, useState } from "react";
import styles from "./ProductList.module.css";
import Item from "../Item/Item";
import CustomButton from "../CustomButton/CustomButton";

const ProductList = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      console.log(result);
      if (result && result.products) {
        setProducts(result.products);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  if (errorMsg) {
    return <div>Umnable to fetch data!</div>;
  }
  function handleNext() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <section className={styles["product-list"]}>
      <h2>Top Trending Adverts</h2>
      <div className={styles["product-list-container"]}>
        {products && products.length
          ? products.map((item) => (
              <Item
                key={item.id}
                thumbnail={item.thumbnail}
                title={item.title}
                price={item.price}
                className={styles.item}
              />
            ))
          : null}
      </div>
      <div className={styles.next}>
        <CustomButton
          buttonStyle={styles["big-btn"]}
          type="orange"
          text="Next"
          onClick={handleNext}
        />
      </div>
    </section>
  );
};

export default ProductList;
