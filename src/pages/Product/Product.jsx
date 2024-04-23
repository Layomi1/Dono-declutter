import CustomButton from "../../components/CustomButton/CustomButton";
import styles from "./Product.module.css";
import notice from "../../assets/notice.svg";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../Context/ProductContext";

const Product = () => {
  const { products, moveToCart } = useContext(ProductsContext);
  const { productId } = useParams();
  const product = products.find((e) => e.id === Number(productId));

  const [currentSlide, setCurrentSlide] = useState(0);

  function handleNext() {
    setCurrentSlide();
    currentSlide === product.images.length - 1 ? 0 : currentSlide + 1;
  }

  function handlePrevious() {
    setCurrentSlide(
      currentSlide === 0 ? product.images.length - 1 : currentSlide - 1
    );
  }

  return (
    <section className={styles.product}>
      <h1>{product.title}</h1>
      <div className={styles.top}>
        <div className={styles.container}>
          <FaChevronLeft
            onClick={handlePrevious}
            className={`${styles.arrow} ${styles["arrow-left"]}`}
          />

          {product.images.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Image ${index}`}
              className={
                currentSlide === index
                  ? styles["current-image"]
                  : `${styles["current-image"]} ${styles.slide}`
              }
            />
          ))}
          <FaChevronRight
            onClick={handleNext}
            className={`${styles.arrow} ${styles["arrow-right"]}`}
          />
        </div>

        <div className={styles.buttons}>
          <CustomButton
            buttonStyle={styles["small-btn"]}
            type="orange"
            text="Add to Cart"
            onClick={() => {
              moveToCart(product.id);
            }}
          />

          <Link to="/buy">
            <CustomButton
              buttonStyle={styles["small-btn"]}
              type="teal"
              text="Buy Now"
            />
          </Link>

          <Link to="/seller">
            <button className={styles.other}>Contact Seller</button>
          </Link>
        </div>
      </div>

      <div className={styles["image-views"]}>
        {product.images.map((imageUrl, index) => (
          <img
            className={styles.thumbnail}
            key={index}
            src={imageUrl}
            alt={`Image ${index}`}
          />
        ))}
      </div>

      <div className={styles["product-bottom"]}>
        <p className={styles.topic}>Product Description</p>
        <div className={styles.level}>
          <div className={styles.description}>
            <p>{product.title}</p>
            <p>&#8358;{product.price}</p>
            <p>{product.brand}</p>
            <p>{product.category}</p>
            <p>{product.stock}</p>
            <div>
              <li>{product.description}</li>
            </div>
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
    </section>
  );
};

export default Product;
