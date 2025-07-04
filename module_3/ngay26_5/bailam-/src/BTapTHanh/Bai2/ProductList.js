function ProductList({ products, addToCart }) {
  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => addToCart(item)}>Thêm vào giỏ</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
