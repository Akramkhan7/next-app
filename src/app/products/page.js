import Link from "next/link";

export default function Products() {
  return (
    <>
      <h1>Products</h1>

      <Link href="/products/1">Product 1</Link>
      <br />
      <Link href="/products/2">Product 2</Link>
    </>
  );
}