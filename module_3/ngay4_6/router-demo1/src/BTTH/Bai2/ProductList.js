import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: '1', name: 'Bàn chải' },
  { id: '2', name: 'kem đánh răng' },
  { id: '3', name: 'Cốc đánh răng' },
];

function ProductList() {
  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
