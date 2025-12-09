import { useCart } from "../store/cartStore";

export default function ProductUI() {
  const addItem = useCart((s) => s.addItem);

  function add(color) {
    addItem({ name: "Headphones", price: 199, color });
  }

  return (
    <div>
      <h1 className="product-title">3D Wireless Headphones</h1>
      <p className="price">€199</p>

      <p style={{ marginTop: "10px", fontWeight: "bold" }}>Choose Color:</p>

      <div className="color-picker">
        <button
          className="color-btn"
          style={{ background: "black" }}
          onClick={() => add("black")}
        ></button>

        <button
          className="color-btn"
          style={{ background: "white" }}
          onClick={() => add("white")}
        ></button>

        <button
          className="color-btn"
          style={{ background: "red" }}
          onClick={() => add("red")}
        ></button>
      </div>

      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
}
