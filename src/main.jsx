import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProductsContextProvider from "./Context/ProductContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductsContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsContextProvider>
);
