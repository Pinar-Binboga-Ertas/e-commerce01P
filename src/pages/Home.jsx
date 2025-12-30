// src/pages/Home.jsx
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ShoppingCart } from "lucide-react";

export default function Home() {
  const dispatch = useDispatch();
  const sampleProduct = { id: 1, title: "Sample Product", price: 19.99 };

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: sampleProduct });
    toast.success("Ürün sepete eklendi!");
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <div className="border p-4 rounded mt-4 flex justify-between items-center">
        <span>{sampleProduct.title} - ${sampleProduct.price}</span>
        <button
          onClick={addToCart}
          className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded"
        >
          <ShoppingCart size={20} />
          Sepete Ekle
        </button>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
}
