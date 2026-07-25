"use client";

import Link from "next/link";
import { useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setProducts(data.products);
  }

  return (
    <>
      <h1>Products</h1>

      <button onClick={fetchProducts}>Fetch all products</button>
      {products?.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>{product.title}</Link>
      ))}
    </>
  );
}
