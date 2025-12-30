// src/pages/Cart.jsx
import { useSelector } from "react-redux";

export default function Cart() {
  const cart = useSelector(state => state.cart);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Cart Page</h1>
      {cart.length === 0 ? (
        <p className="mt-4">Sepetiniz boş</p>
      ) : (
        <ul className="mt-4 space-y-2">
          {cart.map((item, index) => (
            <li key={index} className="border p-2 rounded">
              {item.title} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
