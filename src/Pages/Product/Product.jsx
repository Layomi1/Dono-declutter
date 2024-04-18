import { ProductsContext } from "../../Context/ProductContext";
import CustomButton from "../../components/CustomButton/CustomButton";
import styles from "./Product.module.css";
import notice from "../../assets/notice.svg";
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";

import BannerImageSlide from "../../components/BannerImageSlide/BannerImageSlide";

const Product = () => {
  const { products, moveToCart } = useContext(ProductsContext);
  const { productId } = useParams();
  const product = products.find((e) => {
    return e.id === Number(productId);
  });

  if (!product) {
    return <div>Loading...</div>; // or any other appropriate fallback
  }

  return (
    <section className={styles.product}>
      <h1>{product.id}</h1>
      <div className="top">
        <BannerImageSlide images={product.id} width="694px" height="595px" />
        {/* <div>
          <img src={product.thumbnail} alt={product.id} />
        </div> */}

        <div className={styles.buttons}>
          <Link to="/add-to-cart">
            <CustomButton
              className={styles["small-btn"]}
              type="orange"
              text="Add to Cart"
              onClick={() => {
                moveToCart(product.id);
              }}
            />
          </Link>

          <Link to="/buy">
            <CustomButton
              className={styles["small-btn"]}
              type="other"
              text="Buy Now"
            />
          </Link>

          <Link to="/seller">
            <CustomButton
              className={styles["small-btn"]}
              type="teal"
              text="Contact Seller"
            />
          </Link>
        </div>
      </div>
      <div className="image-array">
        {product.images.map((item, index) => {
          <img
            className={styles.thumbnail}
            key={item.id}
            src={item.thumbnail}
            alt={`Image ${index}`}
          />;
        })}
      </div>
      <div className={styles["product-bottom"]}>
        <p>Product Description</p>
        <div>
          <ul className={styles.description}>
            <li>{product.title}</li>
            <li>{product.price}</li>
            <li>{product.brand}</li>
            <li>{product.category}</li>
            <li>{product.stock}</li>
            <div>
              <li>{product.description}</li>
            </div>
          </ul>
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
