import { ProductsContext } from "../../Context/ProductContext";
import CustomButton from "../../components/CustomButton/CustomButton";
import styles from "./Product.module.css";
import { Link } from "react-router-dom";
import { useContext, useParams } from "react";
import notice from "../../assets/notice.svg";
import BannerImageSlide from "../../components/BannerImageSlide/BannerImageSlide";

const Product = () => {
  const { products } = useContext(ProductsContext);
  const { productId } = useParams();
  const product = products.find((e) => {
    e.id === Number(productId);
  });
  // const [loading, setLoading] = useState(false);
  // const [errorMsg, setErrorMsg] = useState(null);
  // const [product, setProduct] = useState([]);

  // async function fetchProduct() {
  //   try {
  //     setLoading(true);
  //     const response = await fetch("https://dummyjson.com/products/id");
  //     const result = await response.json();
  //     if (result && result.product) {
  //       setProduct(result.product);
  //       setLoading(false);
  //     }
  //     console.log(result);
  //   } catch (e) {
  //     setErrorMsg(e.message);
  //   }
  // }
  // useEffect(() => {
  //   fetchProduct();
  // }, []);

  // if (loading) {
  //   return <div>Loading data ! Please wait</div>;
  // }

  // if (errorMsg) {
  //   return <div>Umnable to fetch data!</div>;
  // }
  // console.log(product);
  // let navigate = useNavigate();
  // function handleCart() {
  // navigate("/add-to-cart");
  // window.location.link = "/add-to-cart";
  // }

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
            />
          </Link>

          <CustomButton
            className={styles["small-btn"]}
            type="#3C5A82"
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
