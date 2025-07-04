import { useState, useEffect } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

function Shop() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Chuột", price: 200 },
    { id: 3, name: "Bàn phím", price: 300 },
  ];

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  useEffect(() => {
    console.log("Giỏ hàng đã thay đổi:", cart);
  }, [cart]);

  return (
    <div>
      <h1>Cửa hàng đơn giản 🛒</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
}

export default Shop;
