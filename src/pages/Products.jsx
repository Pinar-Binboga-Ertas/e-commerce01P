import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../store/cartActions";

// Tek resim kullanıyoruz
import productImg from "../assets/react.svg";

const products = [
  { id: 1, name: "Ürün 1", price: 100, img: productImg },
  { id: 2, name: "Ürün 2", price: 200, img: productImg },
  { id: 3, name: "Ürün 3", price: 300, img: productImg },
];

function Products() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} sepete eklendi!`);
  };

  return (
    <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", padding: "16px" }}>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ddd",
            padding: "16px",
            borderRadius: "8px",
            width: "200px",
            textAlign: "center",
          }}
        >
          <img
            src={product.img}
            alt={product.name}
            style={{ width: "100%", height: "150px", objectFit: "cover", marginBottom: "8px" }}
          />
          <h3>{product.name}</h3>
          <p>{product.price}₺</p>
          <button
            onClick={() => handleAddToCart(product)}
            style={{
              backgroundColor: "#4ade80",
              color: "#fff",
              padding: "8px 12px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Sepete Ekle
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
