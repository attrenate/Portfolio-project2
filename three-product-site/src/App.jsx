import Product3D from "./components/Product3D";
import ProductUI from "./components/ProductUI";
import Cart from "./components/Cart";

export default function App() {
  return (
    <div className="app-container">
      <div className="left">
        <Product3D />
        <ProductUI />
      </div>

      <Cart />
    </div>
  );
}
