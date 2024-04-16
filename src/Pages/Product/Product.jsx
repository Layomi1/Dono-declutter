// import { ProductContext } from "../../Context/ProductContext";
import CustomButton from "../../components/CustomButton/CustomButton";
import styles from "./Product.module.css";
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import notice from "../../assets/notice.svg";

const Product = () => {
  // const { product } = useContext(ProductContext);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [product, setProduct] = useState([]);

  async function fetchProduct() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products/id");
      const result = await response.json();
      if (result && result.product) {
        setProduct(result.product);
        setLoading(false);
      }
      console.log(result);
    } catch (e) {
      setErrorMsg(e.message);
    }
  }
  useEffect(() => {
    fetchProduct();
  }, []);

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  if (errorMsg) {
    return <div>Umnable to fetch data!</div>;
  }
  console.log(product);
  // let navigate = useNavigate();
  // function handleCart() {
  // navigate("/add-to-cart");
  // window.location.link = "/add-to-cart";
  // }

  return (
    <div className={styles.products}>
      <h1>{product.id}</h1>
      {/* <h1>Product title</h1> */}
      <div className="top">
        <img src={product.thumbnail} alt={product.id} />
        <div className={styles.buttons}>
          <CustomButton
            className={styles["small-btn"]}
            type="orange"
            text="Add to Cart"
            to="/add-to-cart"
          />

          <CustomButton
            className={styles["small-btn"]}
            type="other"
            text="Buy Now"
          />

          <CustomButton
            className={styles["small-btn"]}
            type="teal"
            text="Contact Seller"
          />
        </div>
      </div>
      <div className="image-array">
        {product.images.map((item, index) => {
          <img key={index} src={item.thumbnail} alt={`Image ${index}`} />;
        })}
      </div>
      <div className={styles["product-bottom"]}>
        <p>Product Description</p>
        <div>
          <div className={styles.description}>
            <small>{product.title}</small>
            <small>{product.price}</small>
            <small>{product.brand}</small>
            <small>{product.category}</small>
            <small>{product.stock}</small>
          </div>
          <div className={styles.notice}>
            <img src={notice} alt="notice banner" />
            <small>
              Payment are made into Dono Clutter accout and would only be
              released to buyer after 24 hours of delivery
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
