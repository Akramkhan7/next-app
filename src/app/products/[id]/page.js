async function getProducts(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  return res.json();
}

export default async function Product({ params }) {
  const { id } = await params;
  const  product  = await getProducts(id);
  console.log(product);

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} width={200} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Rating: {product.rating}</p>
    </div>
  );
}
