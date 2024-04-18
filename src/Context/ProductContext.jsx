import { createContext, useState, useEffect } from "react";
import ErrorBoundary from "../components/ComponentDidCatch";

export const ProductsContext = createContext(null);
const ProductsContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < products.length + 1; index++) {
      cart[index] = 0;
    }
    return cart;
  };
  const [cartItems, setCartItems] = useState(getDefaultCart());

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      if (result && result.products) {
        setProducts(result.products);
        setLoading(false);
      }
      console.log(result);
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
  console.log(products);

  const moveToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  return (
    <ErrorBoundary>
      <ProductsContext.Provider
        value={{
          products,
          loading,
          errorMsg,
          cartItems,
          moveToCart,
          removeFromCart,
        }}
      >
        {children}
      </ProductsContext.Provider>
    </ErrorBoundary>
  );
};

export default ProductsContextProvider;
