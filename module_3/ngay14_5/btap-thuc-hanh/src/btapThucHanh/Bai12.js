import React from 'react';

function Bai12() {
  const product = { name: 'iPhone', price: '25.000.000 VNĐ' };

  return (
    <>
      <p>Bài 12:</p>
      <h3>{product.name}</h3>
      <p>Giá: {product.price}</p>
    </>
  );
}

export default Bai12;
