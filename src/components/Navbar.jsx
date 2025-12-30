import { Link } from "react-router-dom";
import { Home, ShoppingBag, ShoppingCart } from "lucide-react";
import { toast } from "react-toastify";

function Navbar() {
  const handleTestToast = () => {
    toast.success("Ürün sepete eklendi!"); // Tarayıcıda yeşil bildirim çıkar
  };

  return (
    <nav style={{ padding: "16px", borderBottom: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div>
        <Link to="/" style={{ marginRight: "16px" }}>
          <Home size={18} /> Home
        </Link>

        <Link to="/products" style={{ marginRight: "16px" }}>
          <ShoppingBag size={18} /> Products
        </Link>

        <Link to="/cart">
          <ShoppingCart size={18} /> Cart
        </Link>
      </div>

      <button onClick={handleTestToast}>Sepete Ekle (Test)</button>
    </nav>
  );
}

export default Navbar;
