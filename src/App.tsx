import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { useState } from "react";
import { IProduct } from "./types";

export default function App() {
  const [products, setProducts] = useState<IProduct[]>([
    { id: 1, quantity: 4 },
    { id: 2, quantity: 0 },
    { id: 3, quantity: 7 },
    { id: 4, quantity: 6 },
    { id: 5, quantity: 11 },
  ]);
  function resetQuantity() {
    setProducts(products.map((product) => ({ id: product.id, quantity: 0 })));
  }
  function handleIncrement(id: number) {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          product.quantity++;
        }
        return product;
      })
    );
  }
  function handleDecrement(id: number) {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          product.quantity--;
        }
        return product;
      })
    );
  }
  function handleDelete(id: number) {
    setProducts(products.filter((product) => product.id !== id));
  }
  return (
    <>
      <Navbar products={products} />
      <Products
        products={products}
        onDelete={handleDelete}
        onDecrement={handleDecrement}
        onIncrement={handleIncrement}
        onReset={resetQuantity}
      />
    </>
  );
}
