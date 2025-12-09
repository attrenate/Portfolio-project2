import { useCart } from "../store/cartStore";

export default function Cart() {
  const items = useCart((s) => s.items);

  return (
    <div className="cart-panel">
      <h2>Cart</h2>

      {items.length === 0 && <p>No items</p>}

      {items.map((i, index) => (
        <div key={index} className="cart-item">
          <p><b>{i.name}</b></p>
          <p>Color: {i.color}</p>
          <p>€{i.price}</p>
        </div>
      ))}
    </div>
  );
}
